import {Key} from "react";

interface EntryProperties {
  key: Key
  striped?: boolean
  children: JSX.Element
}

export function Entry(properties: EntryProperties) {
  return (
    <tr
      className={properties.striped ? "bg-gray-100" : ""}
      key={properties.key}
    >
      {properties.children}
    </tr>
  )
}