import {NextApiRequest, NextApiResponse} from 'next'
import {errorCodes} from "./errorCodes";

type Method = 'GET' | 'POST' | 'UPDATE' | 'DELETE' | 'PUT'
type HandleFunction = (request: NextApiRequest, response: NextApiResponse) => Promise<any>

type Endpoint = HandleFunction

export default function endpoint(...functions: Array<[Method, HandleFunction]>): Endpoint {
  const handlers = new Map<string, HandleFunction>()
  for (const [method, handle] of functions) {
    handlers.set(method, handle)
  }
  return async (request, response) => {
    const handle = request.method && handlers.get(request.method)
    if (!handle) {
      response.status(errorCodes.methodNotAllowed).end()
      return
    }
    try {
      await handle(request, response)
    } catch (error) {
      response.status(errorCodes.internal).json(JSON.stringify(error))
    }
  }
}