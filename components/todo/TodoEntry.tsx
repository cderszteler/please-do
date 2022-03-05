import React from "react";
import {Entry} from "../Entry";
import {CheckIcon, TrashIcon} from "@heroicons/react/outline";
import {Todo} from "../../pages/todo";

interface TodoEntryProperties {
  id: number
  author: string
  children: string
  striped?: boolean,
  onCheck: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

function asTodo(properties: TodoEntryProperties): Todo {
  return {
    id: properties.id,
    task: properties.children,
    author: properties.author,
    state: 'UNRESOLVED'
  }
}

export default function TodoEntry(properties: TodoEntryProperties) {
  return (
    <Entry key={properties.id} striped={properties.striped}>
      <React.Fragment>
        <td className="px-6 py-4 whitespace-nowrap text-m text-gray-500 font-semibold">
          #{properties.id}
        </td>
        <td className="px-6 py-4 text-xl text-gray-900">
          {properties.children}
        </td>
        <td className="px-6 py-4 text-lg text-gray-900">
          {properties.author}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className={"inline-flex gap-2"}>
            <CheckIcon
              className={"h-7 w-7 text-gray-500 hover:text-green-500 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100"}
              onClick={() => properties.onCheck(asTodo(properties))}
            />
            <TrashIcon
              className={"h-7 w-7 text-gray-500 hover:text-red-500 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100"}
              onClick={() => properties.onDelete(asTodo(properties))}
            />
          </div>
        </td>
      </React.Fragment>
    </Entry>
  )
}