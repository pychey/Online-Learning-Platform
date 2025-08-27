import { NextResponse } from "next/server";

const course_contents = [
  {
    id: 1,
    course_id: 1,
    content_number: 1,
    title: "Introduction",
    text: "Welcome to the course! In this section, you’ll get an overview of what you’ll learn.",
    isComplete: true
  },
  {
    id: 2,
    course_id: 1,
    content_number: 2,
    title: "Setting Up",
    text: "In this lesson, we’ll guide you through installing the necessary tools and software.",
    isComplete: false
  },
  {
    id: 3,
    course_id: 1,
    content_number: 3,
    title: "Core Concepts",
    text: "Here we’ll dive into the fundamental concepts you need to understand before moving forward.",
    isComplete: false
  },
  {
    id: 4,
    course_id: 1,
    content_number: 4,
    title: "Practical Exercise",
    text: "You’ll practice building a small project to apply what you’ve learned so far.",
    isComplete: false
  },
  {
    id: 5,
    course_id: 1,
    content_number: 5,
    title: "Conclusion & Next Steps",
    text: "We’ll summarize key takeaways and suggest what you can explore next.",
    isComplete: false
  }
];


export async function GET(request,{params}){

    const {id,content}=await params;

    for(let course_content of course_contents){
        
        if(course_content.course_id==id){

            if(course_content.id == content){
                return NextResponse.json({course_content},{status:200})
            }

        }

    }

    return NextResponse.json({message:"Not found"},{status:404})
}

export async function PUT(request,{params}){

    const {id,content}=await params;

    for(let course_content of course_contents){
        
        if(course_content.course_id==id){

            if(course_content.id == content){

                course_contents[content-1].isComplete=true
                return NextResponse.json({message:"progress updated"},{status:200})

            }   
        }
    }

    return NextResponse.json({message:"Not found"},{status:404})
}