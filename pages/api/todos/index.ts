import endpoint from "../../../utils/endpoint";
import {NextApiRequest, NextApiResponse} from "next";
import {errorCodes} from "../../../utils/errorCodes";
import {prisma} from "../../../backend/prisma";
import {authenticated} from "../../../utils/authenticated";

const list = authenticated(
  async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      const todos = await prisma.todos.findMany({
        where: {
          state: 'UNRESOLVED'
        }
      })
      response.status(200).json(todos)
    } catch (error) {
      response.status(errorCodes.badRequest).end()
    }
  }
)

export default endpoint(['GET', list])