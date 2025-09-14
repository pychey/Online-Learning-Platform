import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(req, { params }) {

  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }
  const { slug } = await params

  const userId = session.user.id  

  try {

    const courseWithContents = await prisma.course.findFirst({
              where: {
                  slug: slug
              },
              include: {
                  _count: {
                      select: { courseContents: true },
                  },
                  courseContents: {
                      include:{
                          _count:{
                              select: {lessons:true}
                          },
  
                          lessons:{
                              select:{
                                  title:true,
                                  slug:true,
                              },
                              orderBy:{
                                  order_number:"asc"
                              }
                          }
                      },
                      orderBy:{
                          order_number:"asc"
                      }
                  },
              }
          })
  
          let uncomplete=false;
  
          for (const content of courseWithContents.courseContents) {
              const exist = await prisma.courseContentProgress.findFirst({
                  where: { userId: Number(userId), courseContentSlug: content.slug }
              });
              if (exist) {
                  content.isCompleted = true; // fix typo
              } else {
                  uncomplete=true;
                  content.isCompleted = false;
              }

              if(uncomplete===true){
                break;
              }
  
              for (const lesson of content.lessons) {
                  const exist = await prisma.lessonProgress.findFirst({
                      where: { userId: Number(userId), lessonSlug: lesson.slug }
                  });
                  if (exist) {
                      lesson.isCompleted = true;
                  } else {
                    uncomplete=true
                      lesson.isCompleted = false;
              }
            }
            if(uncomplete===true){
              break;
            }
          }


  if(uncomplete===true){
    return NextResponse.json({message:"សូមបញ្ចប់មេរៀនមុន"},{status:400})
  }

    const exist=await prisma.complete.findFirst({
      where: {
        userId: userId,
        courseSlug: slug,
      },
    })

    if(exist){
      return NextResponse.json({complete:true,score:exist.score,total:exist.score}, { status: 200 })
    }


    return NextResponse.json({complete:false}, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}


export async function POST(req, { params }) {

  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  const userId = session.user.id  

  try {

    const body=await req.json()
    const {score,total}=body
    const { slug } = await params

    await prisma.complete.create({
      data: {
        userId: userId,
        courseSlug: slug,
        score:score,
        total:total,
      },
    })


    return NextResponse.json({message:"exam saved"}, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
