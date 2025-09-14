import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {

  
  try {
    const { slug } = await params

    const quizzes = await prisma.quiz.findMany({
      where: { courseSlug: slug },
      include: {
        answers: {
          orderBy: { order: "asc" }
        }
      }
    })

    return NextResponse.json(quizzes, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

