import React from 'react'
import {prisma} from "../backend/prisma";
import TodoTable from "../components/todo/TodoTable";

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