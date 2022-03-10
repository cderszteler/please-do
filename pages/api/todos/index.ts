import endpoint from "../../../utils/endpoint";
import {NextApiRequest, NextApiResponse} from "next";
import {errorCodes} from "../../../utils/errorCodes";
import {prisma} from "../../../backend/prisma";
import {authenticated} from "../../../utils/authenticated";
import {parseSave} from "../../../utils/json";
import {Todo} from "../../todo";

async function queryTodos(state: string) {
  const query = !state || state === ''
    ? undefined
    : {
      where: {
        state: state
      },
      orderBy: {
        id: 'asc'
      }
    }
  // @ts-ignore
  return prisma.todos.findMany(query)
}

const list = authenticated(
  async (request: NextApiRequest, response: NextApiResponse) => {
    const state = request.query?.state as string
    try {
      const todos = await queryTodos(state)
      response.status(200).json(todos)
    } catch (error) {
      response.status(errorCodes.internal).json(error)
    }
  }
)

async function updateState(id: number, state: string) {
  const query = {
    where: {
      id: id
    },
    data: {
      state: state
    }
  }
  return prisma.todos.update(query)
}

const update = authenticated(
  async (request: NextApiRequest, response: NextApiResponse) => {
    const id = request.query?.id
    const state = parseSave(request.body) as {state: string}
    if (!id || !state.state) {
      response.status(errorCodes.badRequest).end()
      return
    }
    try {
      await updateState(Number(id), state.state)
      response.status(200).end()
    } catch (error) {
      response.status(errorCodes.internal).json(error)
    }
  }
)

interface CreateTodoProperties {
  task: string,
  author: string,
  state: string
}

async function createTodo(properties: CreateTodoProperties) {
  const query = {
    data: {
      task: properties.task,
      author: properties.author,
      state: properties.state
    }
  }
  return prisma.todos.create(query)
}

const create = authenticated(
  async (request: NextApiRequest, response: NextApiResponse) => {
    const properties = parseSave(request.body) as CreateTodoProperties
    if (!properties) {
      response.status(errorCodes.badRequest).end()
      return
    }
    try {
      const todo = await createTodo(properties) as Todo
      response.status(200).json(todo)
    } catch (error) {
      response.status(errorCodes.internal).json(error)
    }
  }
)

export default endpoint(['GET', list], ['PUT', update], ['POST', create])