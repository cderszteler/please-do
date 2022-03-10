import React from "react";
import {Todo, TodoState} from "../../pages/todo";
import Table from "../Table";
import TodoEntry from "./TodoEntry";
import LoadingTable from "../LoadingTable";
import {useMutation, useQuery, useQueryClient} from "react-query";

interface UpdateProperties {
  id: number,
  state: TodoState
}

async function updateState(properties: UpdateProperties): Promise<boolean> {
  const url = `/api/todos?id=${properties.id}`
  const response = await fetch(
    url,
    {
      method: 'PUT',
      body: JSON.stringify({state: properties.state})
    }
  )
  return response.ok
}

async function fetchTodos(state?: TodoState): Promise<Todo[]> {
  const url = `/api/todos?state=${state}`
  const response = await fetch(url)
  return (await response.json()) as Todo[] || []
}

function useTodos(state: TodoState)
  :[boolean, Todo[]]
{
  const {isLoading, data} = useQuery('todos', () => fetchTodos(state))
  return [isLoading, data || []]
}

const unresolvedState = 'UNRESOLVED'

export default function TodoTable() {
  const client = useQueryClient()
  const [loading, todos] = useTodos(unresolvedState)
  const update = useMutation(
    (properties: UpdateProperties) => updateState(properties),
    {
      onSuccess: () => client.invalidateQueries('todos')
    }
  )

  if (loading) {
    return <LoadingTable columns={["Id", "Task", "Author"]}/>
  }

  return (
    <Table columns={["Id", "Task", "Author"]} actions={["Finish", "Delete"]}>
      {todos.map((todo, index) => (
        <TodoEntry
          id={todo.id}
          author={todo.author}
          key={todo.id}
          striped={(index + 1) % 2 == 0}
          onCheck={(todo) => update.mutate({id: todo.id, state: 'RESOLVED'})}
          onDelete={(todo) => update.mutate({id: todo.id, state: 'BACKLOG'})}
        >
          {todo.task}
        </TodoEntry>
      ))}
    </Table>
  )
}