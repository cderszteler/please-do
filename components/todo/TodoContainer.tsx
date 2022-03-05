import React from "react";

interface TodoContainerProperties {
  children: React.ReactNode
}

export default function TodoContainer(properties: TodoContainerProperties) {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col min-h-screen pt-8 items-center">
        {properties.children}
      </div>
    </div>
  )
}