import React, {useCallback, useEffect, useState} from "react";
import {Todo, TodoState} from "../../pages/todo";
import Table from "../Table";
import TodoEntry from "./TodoEntry";
import LoadingTable from "../LoadingTable";

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
        {todos.map(todo => (
          <TodoEntry
            id={todo.id}
            author={todo.author}
            key={todo.id}
            onCheck={removeTodo}
            onDelete={removeTodo}
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