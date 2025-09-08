import { NextResponse } from "next/server";

const course_contents = [
  {
    id: 1,
    course_id: 1,
    content_number: 1,
    course:"intro-to-web-development",
    slug:"introduction",
    title: "Introduction",
    text: "\tWelcome to the course! In this section, you’ll get an overview of what you’ll learn. and break bruh",
    isCompleted: true,
    previous:null,
    next:"setting-up"
  },
  {
    id: 2,
    course_id: 1,
    content_number: 2,
    title: "Setting Up",
    course:"intro-to-web-development",
    slug:"setting-up",
    text: "In this lesson, we’ll guide you through installing the necessary tools and software.",
    isCompleted: false,
    previous:"introduction",
    lesson:[{
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
    next:"core-concepts"
  },
  {
    id: 3,
    course_id: 1,
    content_number: 3,
    title: "Core Concepts",
    course:"intro-to-web-development",
    slug:"core-concepts",
    text: "Here we’ll dive into the fundamental concepts you need to understand before moving forward.",
    isCompleted: false,
    previous:"setting-up",
    next:"null"
  },
  {
    id: 4,
    course_id: 1,
    content_number: 4,
    title: "Practical Exercise",
    course:"intro-to-web-development",
    slug:"practical-exercise",
    text: "You’ll practice building a small project to apply what you’ve learned so far.",
    isCompleted: false,
    previous:"core-concepts",
    next:"null"
  },
  {
    id: 5,
    course_id: 1,
    content_number: 5,
    title: "Conclusion & Next Steps",
    course:"intro-to-web-development",
    slug:"conclusion",
    text: "We’ll summarize key takeaways and suggest what you can explore next.",
    isCompleted: false,
    previous:"null",
    next:"null"
  }
];


export async function GET(request,{params}){

    const {slug}=await params;

    for(let course_content of course_contents){
        
        if(course_content.slug===slug){

          return NextResponse.json(course_content,{status:200})
        }
    }

    return NextResponse.json({message:"Not found"},{status:404})
}

export async function PUT(request,{params}){

    const {slug}=await params;

    for(let course_content of course_contents){
        
        if(course_content.slug===slug){

                course_content.isCompleted=true
                return NextResponse.json({message:"progress updated"},{status:200})
        }
    }

    return NextResponse.json({message:"Not found"},{status:404})
}