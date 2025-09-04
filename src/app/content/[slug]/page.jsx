"use client"

import { useState } from "react"
import CourseLayout from "@/components/ui/CourseLayout"
import { useParams,useRouter } from "next/navigation"
import { getContentBySlug,markCompleted } from "@/lib/content"
import { getCourseContent } from "@/lib/course"
import { useEffect } from "react"
import RightArrow from "@/components/icons/RightArrow"
import Link from "next/link"
import Tick from "@/components/icons/Tick"

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
      router.push(`/content/${content.next}`)

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
      <div className="w-full">

        <h1 className="text-center mx-auto text-3xl font-semibold">{content.content_number}. {content.title}</h1>
        <p className="my-10">{content.text}</p>

        <div className="flex justify-between items-center flex-row-reverse my-10 w-full">

          <div
            onClick={markComplete}
            className={`flex items-center justify-start px-12 py-2 bg-green-800
             text-white text-lg cursor-pointer`}
          >
            បញ្ចប់មេរៀន <Tick />
          </div>
            <Link href={`/content/${content.previous}`} className={`flex items-center justify-start ${content.previous?"block":"hidden"} px-12 py-2 bg-primary text-white text-lg cursor-pointer`}><RightArrow className={`rotate-180 h-6 w-6`}/>មេរៀនមុន</Link>
          </div>
      </div>
    </CourseLayout>
  )
}

export default page