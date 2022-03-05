import React from "react";

interface LoginContainerProperties {
  children: React.ReactNode
}

export default function LoginContainer(properties: LoginContainerProperties) {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      {properties.children}
    </div>
  )
}