import React from "react";
import {Entry} from "../Entry";

interface TodoEntryProperties {
  id: number,
  author: string,
  children: string
}

export default function TodoEntry(properties: TodoEntryProperties) {
  return (
    <Entry key={properties.id}>
      <React.Fragment>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{properties.id}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{properties.children}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{properties.author}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
        </td>
      </React.Fragment>
    </Entry>
  )
}