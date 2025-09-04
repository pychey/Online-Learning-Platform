import { NextResponse } from "next/server";

const content_of_course={
    metadata:{
        course_title:"Intro to Web development",
        chapter:5,
        slug:"intro-to-web-development",
        duration:"2 hours",
        completed:75
    },
    data:[
        {
            id:1,
            course_id:1,
            slug:"introduction",
            title: "Introduction",
            lesson:0,
            content_number: 1,
            isCompleted: true,
        },
        {
            id:2,
            course_id:1,
            slug:"setting-up",
            title: "Setting Up",
            lesson_content:[{
                title:"welcome",
                slug:"welcome",
                isCompleted:true},
            {   
                slug:"meet-your-instructor",
                title:"meet-your-instructor",
                isCompleted:false
            },
            {
                title:"installing-required-tool",
                slug:"installing-required-tool",
                isCompleted:false
            }],
            lesson:3,
            content_number: 2,
            isCompleted: false
        },
        {
            id:3,
            course_id:1,
            slug:"core-concepts",
            title: "Core Concept",
            content_number: 3,
            lesson:4,
            isCompleted: false
        },
        {
            id:4,
            course_id:1,
            slug:"introduction",
            title: "Introduction",
            lesson:5,
            content_number: 4,
            isCompleted: true
        },
        {
            id:5,
            course_id:1,
            slug:"introduction",
            title: "Introduction",
            content_number: 5,
            lesson:5,
            isCompleted: true
        }
    ]
}

export async function GET(request,{params}){
    
    const {slug}=await params

    if(slug==="intro-to-web-development"){
        return NextResponse.json(content_of_course,{status:200})
    }

    return NextResponse.json({message:"not found"},{status:404})
}