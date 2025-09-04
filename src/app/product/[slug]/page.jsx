"use client"

import { useParams } from "next/navigation";
import { useEffect,useState } from "react"

import CourseBenefits from "./_components/CourseBenefits"
import CourseDescription from "./_components/CourseDescription"
import CourseActionBar from "./_components/CourseActionBar"
import CourseRecommend from "./_components/CourseRecommend"

import COURSE_DESCRIPTION from "@/data/course_description"
import COURSES_RECOMMEND from "@/data/course_recommend";


import { getCourseBySlug } from "@/lib/course"


const CourseDetail = () => {

	  const params = useParams(); 
	const {slug}=params;

	const [loading,setLoading]=useState(true)
	const [course,setCourse]=useState(null)
	const [error,setError]=useState("")

	useEffect(()=>{

		fetchCourse()

	},[])

	const fetchCourse=async()=>{

		try {

		const data=await getCourseBySlug(slug);
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
		<main className="mt-20">
			<CourseDescription data={course}/>
			<CourseBenefits />
			<CourseActionBar />
			<CourseRecommend data={COURSES_RECOMMEND}/>
		</main>
	)
}

export default CourseDetail