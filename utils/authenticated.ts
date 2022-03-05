import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "@auth0/nextjs-auth0";
import {errorCodes} from "./errorCodes";

export const authenticated = (
  job :((request: NextApiRequest, response: NextApiResponse) => Promise<any>)
): ((request: NextApiRequest, response: NextApiResponse) => Promise<any>) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const session = getSession(request, response);

    if (!session || !session.user) {
      response.status(errorCodes.unauthorized).end()
    }
    await job(request, response)
  }
}