import React, {useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {CreateTodoProperties} from "../../pages/api/todos";
import {useUser} from "@auth0/nextjs-auth0";

async function updateState(properties: CreateTodoProperties): Promise<boolean> {
  const url = `/api/todos`
  const response = await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(properties)
    }
  )
  return response.ok
}

const unknownAuthor = 'Unknown'
const createdState = 'UNRESOLVED'

export default function TodoInput() {
  const {user, isLoading} = useUser()
  const [value, setValue] = useState("")
  const client = useQueryClient()
  const create = useMutation(
    (properties: CreateTodoProperties) => updateState(properties),
    {
      onSuccess: () => client.invalidateQueries('todos')
    }
  )

  if (isLoading) {
    return <></>
  }

  return (
    <div
      className="py-2 max-w-6xl sm:px-6 sm:min-w-[38rem] lg:px-8 lg:min-w-[64rem] xl:min-w-[72rem]">
      <div
        className="shadow border-b border-gray-200 sm:rounded-lg focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none focus:ring-gray-300"
      >
        <form onSubmit={event => {
          create.mutate({
            task: value,
            author: user?.name || unknownAuthor,
            state: createdState
          })
          setValue("")
          event.preventDefault()
        }}>
          <textarea
            className="w-full min-h-[3rem] resize-y border-none border-0 focus:ring-0"
            placeholder="Your task"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <div className="flex items-center justify-between p-2">
            <div className="flex space-x-1"/>
            <button type="submit" className="
                inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1
                rounded border px-3 py-1.5 text-xs
                font-medium text-white bg-gradient-to-r from-teal-400 to-cyan-500
                hover:bg-white-700 hover:-translate-y-0.5 hover:scale-105 transition ease-in-out delay-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}