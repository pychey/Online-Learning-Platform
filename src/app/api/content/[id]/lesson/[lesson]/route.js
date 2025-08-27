import { NextResponse } from "next/server";

const lessons = [
  {
    id: 1,
    course_content_id: 1,
    lesson_number: 1,
    title: "Welcome to the Course",
    text: "An overview of the course objectives and structure.",
    isComplete: true
  },
  {
    id: 2,
    course_content_id: 1,
    lesson_number: 2,
    title: "Meet Your Instructor",
    text: "Get to know your instructor and their background.",
    isComplete: false
  },
  {
    id: 3,
    course_content_id: 2,
    lesson_number: 1,
    title: "Installing Required Tools",
    text: "Step-by-step guide on setting up the environment.",
    isComplete: false
  },
  {
    id: 4,
    course_content_id: 3,
    lesson_number: 1,
    title: "Understanding Key Concepts",
    text: "Deep dive into the fundamental principles behind the topic.",
    isComplete: false
  },
  {
    id: 5,
    course_content_id: 4,
    lesson_number: 1,
    title: "Hands-On Practice",
    text: "Apply your knowledge by working on a small practical task.",
    isComplete: false
  }
];


export async function GET(request,{params}) {

    const {id,lesson}= await params

    for(let l of lessons){
            
        if(l.id==lesson){
    
            if(l.course_content_id == id){
                return NextResponse.json({lesson:l},{status:200})
            }
    
        }
    
    }

    return NextResponse.json({message:"Not found"},{status:400})
}

export async function PUT(request,{params}){

    const {id,lesson}=await params;

    for(let l of lessons){
        
        if(l.id==lesson){

            if(l.course_content_id == id){

                lessons[lesson-1].isComplete=true
                return NextResponse.json({message:"progress updated"},{status:200})

            }   
        }
    }

    return NextResponse.json({message:"Not found"},{status:404})
}