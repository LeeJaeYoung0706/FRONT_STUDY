// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

const secret = process.env.SECRET

export default async function jwt(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret })
  res.send(JSON.stringify(token, null, 2))
}
