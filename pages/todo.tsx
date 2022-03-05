import React from 'react'
import {prisma} from "../backend/prisma";
import TodoTable from "../components/todo/TodoTable";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export type TodoState = 'UNRESOLVED' | 'RESOLVED' | 'BACKLOG'

export interface Todo {
  id: number
  task: string
  author: string
  state: TodoState
}

export interface TodoProperties {
  todos: Todo[]
}

export default function TodoPage(properties: TodoProperties) {
  return (
    <TodoTable todos={properties.todos}/>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps() {
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
})