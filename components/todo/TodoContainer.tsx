import React from "react";

interface TodoContainerProperties {
  children: React.ReactNode
}

export default function TodoContainer(properties: TodoContainerProperties) {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col min-h-screen sm:pt-56 items-center bg-gray-800">
        {properties.children}
      </div>
    </div>
  )
}