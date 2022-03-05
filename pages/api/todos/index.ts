import endpoint from "../../../utils/endpoint";
import {NextApiRequest, NextApiResponse} from "next";
import {errorCodes} from "../../../utils/errorCodes";
import {prisma} from "../../../backend/prisma";
import {authenticated} from "../../../utils/authenticated";

async function queryTodos(state: string) {
  const query = !state || state === ''
    ? undefined
    : {
      where: {
        state: state
      }
    }
  return prisma.todos.findMany(query)
}

const list = authenticated(
  async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const state = request.query?.state as string
      const todos = await queryTodos(state)
      response.status(200).json(todos)
    } catch (error) {
      response.status(errorCodes.internal).json(error)
    }
  }
)

export default endpoint(['GET', list])