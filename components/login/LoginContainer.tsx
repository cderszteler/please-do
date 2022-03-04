import React from "react";

interface LoginContainerProperties {
  children: React.ReactNode
}

export default function LoginContainer(properties: LoginContainerProperties) {
  return (
    <div className="pt-[25vh] h-screen w-screen bg-gray-100">
      {properties.children}
    </div>
  )
}