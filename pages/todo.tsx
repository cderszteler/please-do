import React from 'react'
import TodoEntry from "../components/todo/TodoEntry";
import Table from "../components/Table";
import {prisma} from "../backend/prisma";

type TodoState = 'UNRESOLVED' | 'RESOLVED' | 'BACKLOG'

interface Todo {
  id: number
  task: string
  author: string
  state: TodoState
}

interface TodoProperties {
  todos: Todo[]
}

export default function TodoPage(properties: TodoProperties) {
  properties.todos.map((todo) => console.log("got: " + todo.id))
  return (
    <React.Fragment>
      <Table columns={["Id", "Task", "Author"]} actions={["Finish", "Delete"]}>
        {properties.todos.map(todo => (
          <TodoEntry id={todo.id} author={todo.author} key={todo.id}>
            {todo.task}
          </TodoEntry>
        ))}
      </Table>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  const todos = await prisma.todos
    .findMany({
      where: {
        state: 'UNRESOLVED'
      }
    })
  return {
    props: {
      todos: todos
    }
  }
}