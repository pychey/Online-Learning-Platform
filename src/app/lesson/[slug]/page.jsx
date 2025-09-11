"use client"

import { useState,useEffect } from "react"
import CourseLayout from "@/components/ui/CourseLayout"
import { useParams,useRouter } from "next/navigation"   
import { getCourseContent } from "@/lib/course"
import { getLessonBySlug} from "@/lib/lesson"
import LessonDetail from "./component/LessonDetail"
import { useSession } from "next-auth/react";
import { markCompleted } from "@/lib/lesson"

const page = () => {

    const param=useParams();
    const { data: session, status } = useSession();
    const {slug}=param;
    const router=useRouter()

    const [course,setCourse]=useState(null)
    const [lesson,setLesson]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(() => {
        if (status === "loading") return;

        if (status === "unauthenticated") {
          setError("You must be logged in to view your courses.");
          setLoading(false);
          return;
        }

        getLesson()
      }, [status]);
    const getLesson=async()=>{
        try {
          const data=await getLessonBySlug(slug)
          setLesson(data)
          const course_data=await getCourseContent(data.courseSlug,session.user.id)
          setCourse(course_data)
    
        } catch (error) {
          setError(error.response.data.message)
        }finally{
          setLoading(false)
        }
      }

    const markComplete=async()=>{
      try {
  
        await markCompleted(slug,session.user.id);
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
      <LessonDetail lesson={lesson} markComplete={markComplete}/>
    </CourseLayout>
  )
}

export default page