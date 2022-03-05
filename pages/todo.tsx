import React from 'react'
import TodoTable from "../components/todo/TodoTable";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

export type TodoState = 'UNRESOLVED' | 'RESOLVED' | 'BACKLOG'

export interface Todo {
  id: number
  task: string
  author: string
  state: TodoState
}

export default function TodoPage() {
  return (
    <TodoTable/>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/'
})