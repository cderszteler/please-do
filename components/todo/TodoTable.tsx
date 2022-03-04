import {TodoProperties} from "../../pages/todo";
import TodoEntry from "./TodoEntry";
import Table from "../Table";
import React, {useState} from "react";

export default function TodoTable(properties: TodoProperties) {
  const [todos, setTodos] = useState(properties.todos)

  return (
    <Table columns={["Id", "Task", "Author"]} actions={["Finish", "Delete"]}>
      {todos.map(todo => (
        <TodoEntry id={todo.id} author={todo.author} key={todo.id}>
          {todo.task}
        </TodoEntry>
      ))}
    </Table>
  )
}