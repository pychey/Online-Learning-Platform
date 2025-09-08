"use client"

import { useState,useEffect } from "react"
import CourseLayout from "@/components/ui/CourseLayout"
import { useParams,useRouter } from "next/navigation"   
import { getCourseContent } from "@/lib/course"
import { getLessonBySlug} from "@/lib/lesson"
import Link from "next/link";
import RightArrow from "@/components/icons/RightArrow"
import Tick from "@/components/icons/Tick"
import lessonContents from "../../../../prisma/model.data/lessonContent"

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
          const course_data=await getCourseContent(data.courseSlug)
          setCourse(course_data)
    
        } catch (error) {
          setError(error.response.data.message)
        }finally{
          setLoading(false)
        }
      }

    const markComplete=async()=>{
      try {
  
        // await markCompleted(slug);
        if(lesson.nextSlug){
          return router.push(`/lesson/${lesson.nextSlug}`)
        
        }
          router.push(`/content/${lesson.courseContentSlug}`)
        
  
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

        <h1 className="text-center mx-auto text-3xl font-semibold">{lesson.order_number}. {lesson.title}</h1>
        <p className="my-10 text-xl font-semibold">{lesson.key_takeaway_text}</p>

        {lesson.lessonContents.map((content, index) => {
          if (content.content_type === "image") {
            return (
              <div key={index} className="w-full">
                <img className="w-full h-full object-contain" src={content.content} alt="lesson picture" />
              </div>
            );
          } else {
            return (
              <p key={index} className="my-2 text-lg flex items-center gap-2">
                {content.content_type === "list" && <span className="text-4xl flex-shrink-0">•</span>}
                <span>{content.content}</span>
              </p>
            );
          }
        })}

        <div className="flex justify-between items-center flex-row-reverse my-10 w-full">

          <div
            onClick={markComplete}
            className={`flex items-center justify-start px-12 py-2 bg-green-800
             text-white text-lg cursor-pointer`}
          >
            បញ្ចប់មេរៀន <Tick />
          </div>
            <Link href={`${lesson.prevSlug?`/lesson/${lesson.prevSlug}`:`/content/${lesson.courseContentSlug}`}`} className={`flex items-center justify-start px-12 py-2 bg-primary text-white text-lg cursor-pointer`}><RightArrow className={`rotate-180 h-6 w-6`}/>{lesson.prevSlug?"ចំណុចមុន":"ទៅមេរៀន"}</Link>
          </div>
      </div>
    </CourseLayout>
  )
}

export default page