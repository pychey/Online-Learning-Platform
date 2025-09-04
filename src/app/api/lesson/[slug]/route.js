import { NextResponse } from "next/server";

const lessons = [
  {
    id: 1,
    course_content_id: 1,
    lesson_number: 1,
    title: "Welcome to the Course",
    slug:"welcome",
    text: "An overview of the course objectives and structure.",
    previous:null,
    next:"meet-your-instructor",
    course:"intro-to-web-development",
    isComplete: true
  },
  {
    id: 2,
    course_content_id: 1,
    lesson_number: 2,
    title: "Meet Your Instructor",
    slug:"meet-your-instructor",
    text: "Get to know your instructor and their background.",
    previous:"welcome",
    next:"installing-required-tool",
    course:"intro-to-web-development",
    isComplete: false
  },
  {
    id: 3,
    course_content_id: 2,
    lesson_number: 3,
    title: "Installing Required Tools",
    slug:"installing-required-tool",
    text: "Step-by-step guide on setting up the environment.",
    previous:"meet-your-instructor",
    next:null,
    course:"intro-to-web-development",
    isComplete: false
  }
];


export async function GET(request,{params}) {

    const {slug}= await params

    for(let l of lessons){
            
        if(l.slug==slug){

                return NextResponse.json(l,{status:200})
    
        }
    
    }

    return NextResponse.json({message:"Not found"},{status:400})
}

export async function PUT(request,{params}){

    const {slug}=await params;

    for(let l of lessons){
        
        if(l.slug==slug){

          l.isComplete=true
          return NextResponse.json({message:"progress updated"},{status:200})
    
        }
    }

    return NextResponse.json({message:"Not found"},{status:404})
}