import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
    const { slug } = await params;
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId")
    try {

        if(!userId){
            return NextResponse.json("missing data",{status:400})
        }
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

        let completed=0;
        let total=0;

        let n=0,contentSlug;

        for (const content of courseWithContents.courseContents) {
            const exist = await prisma.courseContentProgress.findFirst({
                where: { userId: Number(userId), courseContentSlug: content.slug }
            });
            total+=1;
            if (exist) {
                completed += 1;
                content.isCompleted = true; // fix typo
            } else {
                if(n===0){
                    contentSlug=content.slug;
                    n+=1;
                }
                content.isCompleted = false;
            }

            for (const lesson of content.lessons) {
                const exist = await prisma.lessonProgress.findFirst({
                    where: { userId: Number(userId), lessonSlug: lesson.slug }
                });
                total+=1;
                if (exist) {
                    completed += 1;
                    lesson.isCompleted = true;
                } else {
                    lesson.isCompleted = false;
            }
        }
        }

        const percentage=((completed/total)*100).toFixed(2)

        const course={...courseWithContents,completedPercentage:percentage,continue:contentSlug}
        
        return NextResponse.json(course)
    } catch (reason) {
        console.log(reason)
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}