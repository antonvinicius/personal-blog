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
    await prisma.$disconnect()

    return res.status(201).send()
  }
  if (req.method === 'GET') {

    await prisma.$connect()

    const posts = await prisma.post.findMany()
    await prisma.$disconnect()

    return res.status(201).json(posts)
  }
}