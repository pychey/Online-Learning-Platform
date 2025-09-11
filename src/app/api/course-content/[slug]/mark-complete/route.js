import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req,{params}){
    const { slug } = await params;
    try {

        const body=await req.json()
        const {userId}=body

        if(!userId||!slug){
            return NextResponse.json({message:"missing requirement"}, { status: 400 })
        }

        const lessons = await prisma.lesson.findMany({
            where: {
                courseContent: {
                slug: slug,
                },
            },
            select: {
                slug: true,
                id: true,
            },
        });


        for (let lesson of lessons ){
            const found=await prisma.lessonProgress.findFirst({
                where:{
                    userId,
                    lessonSlug:lesson.slug,
                }
            })
            if(!found){
                return NextResponse.json({message:"សូ​មបញ្ចប់មេរៀន"},{status:400})
            }
        }

        const exist=await prisma.courseContentProgress.findFirst({
            where:{
                userId,
                courseContentSlug:slug,
            }
        })

        if (exist){
            
            return NextResponse.json({message:"Already Mark"},{status:200})
        }
        
        await prisma.courseContentProgress.create({
            data: {
                user: { connect: { id: userId } },
                courseContent: { connect: { slug } },
            },
        });

        return NextResponse.json({message:"complete success"},{status:201})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Something went wrong"}, { status: 500 })
    }
}