"use client"

import { useState,useEffect } from "react"
import CourseLayout from "@/components/ui/CourseLayout"
import { useParams,useRouter } from "next/navigation"   
import { getCourseContent } from "@/lib/course"
import { getLessonBySlug,markCompleted } from "@/lib/lesson"
import Link from "next/link";
import RightArrow from "@/components/icons/RightArrow"
import Tick from "@/components/icons/Tick"

const page = () => {

    const param=useParams();
    const {slug}=param;
    const router=useRouter()

    const [course,setCourse]=useState(null)
    const [lesson,setLesson]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

      useEffect(()=>{
        getLesson()
      },[])
    
    const getLesson=async()=>{
        try {
          const data=await getLessonBySlug(slug)
          setLesson(data)
          const course_data=await getCourseContent(data.course)
          setCourse(course_data)
    
        } catch (error) {
          setError(error.response.data.message)
        }finally{
          setLoading(false)
        }
      }

    const markComplete=async()=>{
      try {
  
        await markCompleted(slug);
        router.push(`/lesson/${lesson.next}`)
  
      } catch (error) {
        setError(error?.response?.data?.message || error.message || "Something went wrong")
      }
    }


  if (loading) {
		return <h1 className="mt-20">Loading...</h1>;
	}

	if (error) {
		return <h1 className="mt-20">{error}</h1>;
	}

  return (
    <CourseLayout course={course}>
      <div className="w-full">

        <h1 className="text-center mx-auto text-3xl font-semibold">{lesson.lesson_number}. {lesson.title}</h1>
        <p className="my-10">{lesson.text}</p>

        <div className="flex justify-between items-center flex-row-reverse my-10 w-full">

          <div
            onClick={markComplete}
            className={`flex items-center justify-start px-12 py-2 bg-green-800
             text-white text-lg cursor-pointer`}
          >
            បញ្ចប់មេរៀន <Tick />
          </div>
            <Link href={`/lesson/${lesson.previous}`} className={`flex items-center justify-start ${lesson.previous?"block":"hidden"} px-12 py-2 bg-primary text-white text-lg cursor-pointer`}><RightArrow className={`rotate-180 h-6 w-6`}/>មេរៀនមុន</Link>
          </div>
      </div>
    </CourseLayout>
  )
}

export default page