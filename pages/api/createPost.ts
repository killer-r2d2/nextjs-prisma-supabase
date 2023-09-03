import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try{
      const data = await prisma.post.create({
        data: {
          title: req.body.title,
          content: req.body.content,
          published: req.body.published,
        },
      })
      res.status(201).json(data)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}