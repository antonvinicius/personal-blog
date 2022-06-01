import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, color } = req.body

    await prisma.$connect()

    await prisma.post.create({
      data: {
        title,
        content,
        color
      },
    })

    return res.status(201).send()
  } else if (req.method === 'PUT') {

  } else if (req.method === 'DELETE') {

  }
}