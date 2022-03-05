import React, {useCallback, useEffect, useState} from "react";
import {Todo, TodoState} from "../../pages/todo";
import Table from "../Table";
import TodoEntry from "./TodoEntry";
import LoadingTable from "../LoadingTable";

async function updateState(id: number, state: TodoState): Promise<boolean> {
  const url = `/api/todos?id=${id}`
  const response = await fetch(
    url,
    {
      method: 'PUT',
      body: JSON.stringify({state: state})
    }
  )
  return response.ok
}

function handleInteraction(
  todo: Todo,
  state: TodoState,
  remove: (todo: Todo) => void
) {
  updateState(todo.id, state)
    .then(ok => {
      if (ok) {
        remove(todo)
        return
      }
      console.error("Request was not executed successfully")
    })
    .catch(error => console.error("Request throw an error", {error}))
}

async function fetchTodos(state?: TodoState): Promise<Todo[]> {
  const url = `/api/todos?state=${state}`
  const response = await fetch(url)
  return (await response.json()) as Todo[] || []
}

function useTodos(state: TodoState)
  :[Todo[], React.Dispatch<React.SetStateAction<Todo[]>>, boolean]
{
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTodos(state)
      .then(todos => {
        setTodos(todos)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [state])
  return [todos, setTodos, loading]
}

const unresolvedState = 'UNRESOLVED'

export default function TodoTable() {
  const [todos, setTodos, loading] = useTodos(unresolvedState)

  const table = useCallback(() => {
    const removeTodo = (todo: Todo) => {
      const edited = todos.filter(checked => todo.id != checked.id)
      setTodos(edited)
    }

    return (
      <Table columns={["Id", "Task", "Author"]} actions={["Finish", "Delete"]}>
        {todos.map((todo, index) => (
          <TodoEntry
            id={todo.id}
            author={todo.author}
            key={todo.id}
            striped={(index + 1) % 2 == 0}
            onCheck={(todo) => handleInteraction(todo, 'RESOLVED', removeTodo)}
            onDelete={(todo) => handleInteraction(todo, 'BACKLOG', removeTodo)}
          >
            {todo.task}
          </TodoEntry>
        ))}
      </Table>
    )
  }, [setTodos, todos])

  return loading
    ? <LoadingTable columns={["Id", "Task", "Author"]}/>
    : table()
}