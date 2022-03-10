import React from 'react'
import TodoTable from "../components/todo/TodoTable";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";
import TodoContainer from "../components/todo/TodoContainer";
import TodoInput from "../components/todo/TodoInput";

export type TodoState = 'UNRESOLVED' | 'RESOLVED' | 'BACKLOG'

export interface Todo {
  id: number
  task: string
  author: string
  state: TodoState
}

export default function TodoPage() {
  return (
    <TodoContainer>
      <TodoTable/>
      <TodoInput/>
    </TodoContainer>
  )
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/'
})