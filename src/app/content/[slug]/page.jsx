  "use client"

  import { useState } from "react"
  import CourseLayout from "@/components/ui/CourseLayout"
  import { useParams,useRouter } from "next/navigation"
  import { getContentBySlug,markCompleted } from "@/lib/content"
  import { getCourseContent } from "@/lib/course"
  import { useEffect } from "react"
  import ContentDetail from "./component/ContentDetail"
  import { useSession } from "next-auth/react";


  const page = () => {

    const { data: session, status } = useSession();

    const param=useParams();
    const {slug}=param;

    const router=useRouter()


    const [course,setCourse]=useState(null)
    const [content,setContent]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    const [errorMark,setErrorMark]=useState("")

  useEffect(() => {
      if (status === "loading") return;

      if (status === "unauthenticated") {
        setError("You must be logged in to view your courses.");
        setLoading(false);
        return;
      }

      getContent();
  }, [status]);


    const getContent=async()=>{
      try {

        const data=await getContentBySlug(slug,session.user.id);
        setContent(data)
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
        if(content.nextSlug){
          return router.push(`/content/${content.nextSlug}`)
        }
        router.push(`/course/${content.courseSlug}`)

      } catch (error) {
        setErrorMark(error.response.data.message)
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
        <ContentDetail content={content} markComplete={markComplete} errorMark={errorMark}/>
      </CourseLayout>
    )
  }

  export default page