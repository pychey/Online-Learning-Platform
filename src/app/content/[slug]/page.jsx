"use client"

import { useState } from "react"
import CourseLayout from "@/components/ui/CourseLayout"
import { useParams,useRouter } from "next/navigation"
import { getContentBySlug } from "@/lib/content"
import { getCourseContent } from "@/lib/course"
import { useEffect } from "react"
import ContentDetail from "./component/ContentDetail"


const page = () => {

  const param=useParams();
  const {slug}=param;

  const router=useRouter()


  const [course,setCourse]=useState(null)
  const [content,setContent]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")

  useEffect(()=>{
    getContent()
  },[])

  const getContent=async()=>{
    try {

      const data=await getContentBySlug(slug);
      setContent(data)
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
      if(content.nextSlug){
        return router.push(`/content/${content.nextSlug}`)
      }
      router.push(`/course/${content.courseSlug}`)

    } catch (error) {
      setError(error.response.data.message)
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
      <ContentDetail content={content} markComplete={markComplete}/>
    </CourseLayout>
  )
}

export default page