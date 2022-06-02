import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query
  if (req.method === 'GET') {
    await prisma.$connect()

    const post = await prisma.post.findUnique({
      where: {
        id
      }
    })
    await prisma.$disconnect()

    return res.status(200).json(post)
  }
  if (req.method === 'PUT') {
    const { title, content, color } = req.body
    await prisma.$connect()
    await prisma.post.update({
      where: {
        id
      },
      data: {
        title,
        content,
        color,
      }
    })
    await prisma.$disconnect()

    return res.status(201).send()
  }

  if (req.method === 'DELETE') {
    await prisma.$connect()
    await prisma.post.delete({
      where: {
        id
      }
    })
    await prisma.$disconnect()

    return res.status(201).send()
  }
}