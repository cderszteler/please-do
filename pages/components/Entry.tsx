import {Key} from "react";

interface EntryProperties {
  key: Key
  children: JSX.Element
}

export function Entry(properties: EntryProperties) {
  return (
    <tr key={properties.key}>
      {properties.children}
    </tr>
  )
}