import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req) {
  try {
    const { lessonId, lesson, toCreate, toUpdate, toDelete } = await req.json()

    const result = await prisma.$transaction(async (tx) => {
      await tx.lesson.update({
        where: { id: lessonId },
        data: { 
          title: lesson.title ,
          key_takeaway_text: lesson.key_takeaway_text,
        },
      })

      if (toDelete?.length) {
        await tx.lessonContent.deleteMany({
          where: {
            id: { in: toDelete.map((item) => item.id) },
            lessonId,
          },
        })
      }

      if (toCreate?.length) {
        await tx.lessonContent.createMany({
          data: toCreate.map((item) => ({
            content: item.content,
            content_type: item.content_type,
            order_number: item.order_number,
            lessonId,
          })),
        })
      }

      for (const item of toUpdate) {
        await tx.lessonContent.update({
          where: { id: item.id },
          data: {
            content: item.content,
            content_type: item.content_type,
            order_number: item.order_number,
          },
        })
      }

      return { success: true }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Save error:", error)
    return NextResponse.json({ error: "Failed to save lesson changes." }, { status: 500 })
  }
}
