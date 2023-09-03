import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try{
      const data = await prisma.post.findMany({
        where: { published: true },
        select: { id: true, title: true },
      })
      res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}