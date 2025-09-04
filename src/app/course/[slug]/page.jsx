"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState,useEffect } from "react";
import { getCourseContent } from "@/lib/course";
import CourseLayout from "@/components/ui/CourseLayout";
import Tick from "@/components/icons/Tick";


const Course = () => {

	const params = useParams(); 
	const {slug}=params;

	const [course,setCourse]=useState(null)
	const [loading,setLoading]=useState(true)
	const [error,setError]=useState("")

	useEffect(()=>{

		getContentOfCourse()

	},[])


	const getContentOfCourse= async()=>{
		try {
			const data=await getCourseContent(slug);
			setCourse(data)
		} catch (error) {
			setError(error.response.data.message)
		}finally{
			setLoading(false)
		}
	}


	if (loading) {
		return <h1 className="mt-20">Loading...</h1>;
	}

	if (error) {
		return <h1 className="mt-20">{error}</h1>;
	}

	return(
        <CourseLayout course={course}>
			<div className="w-full">

				<h1 className="text-2xl font-[500]">{course.metadata.course_title}</h1>

				<h2 className="my-2 opacity-60">{course.metadata.chapter} Chapters | {course.metadata.duration}</h2>

				<h1 className="text-2xl my-10">មាតិកា</h1>

				{
					course.data.map((c,index)=>(
						<Link href={`/content/${c.slug}`} key={index} className="flex justify-start items-center gap-4 border-2 rounded-md border-gray-300 my-4 py-6 pl-4 ">

							<div className={`relative border-4 border-gray-200 rounded-2xl h-6 w-6`}><Tick className={` h-6 w-6 ${c.isCompleted?"block":"hidden"} absolute -left-1 -top-1 text-white bg-green-300 rounded-2xl`}/></div>
							<div className="flex flex-col gap-1">
								<h1 className="text-lg ">{c.content_number}. {c.title}</h1>
								{c.lesson!=0&&<p className="text-sm text-gray-400">{c.lesson} Topics</p>}
							</div>

						</Link>
					))
				}
			</div>
		</CourseLayout>
	)
}

export default Course