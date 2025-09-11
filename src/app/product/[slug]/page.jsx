"use client"

import { useParams } from "next/navigation";
import { useEffect,useState } from "react"
import CourseBenefits from "./_components/CourseBenefits"
import CourseDescription from "./_components/CourseDescription"
import CourseActionBar from "./_components/CourseActionBar"
import CourseRecommend from "./_components/CourseRecommend"
import axios from "axios";
import { useSession } from "next-auth/react";


const CourseDetail = () => {
	const params = useParams(); 
	const { slug } = params;

	const [loading,setLoading]=useState(true)
	const [error,setError]=useState('')
	const [course, setCourse] = useState(null)
	const [isPaid, setIsPaid] = useState(false)
	const { data: session, status } = useSession()

	useEffect(() => {
		if (!slug) return;
		async function fetchCourse() {
			try {
				const response = await axios.get(`/api/course/${slug}`)
				setCourse(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCourse()
	}, [slug])

	useEffect(() => {
		if (!course || status !== 'authenticated') return;
		
		async function fetchUserCourse() {
			try {
				if (status === 'authenticated' && course) {
					const { data: courses } = await axios.get(`/api/user/${session.user.id}/course`)
					if(courses.find(c => c.id === course.id)) setIsPaid(true)
				}
			} catch (error) {
				console.log(error)
				setError(error.message)
			}
		}

		fetchUserCourse()
	}, [course, session])
	
	if (status === 'loading' || loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

	return(
		<main className="mt-20">
			<CourseDescription course={course} isPaid={isPaid}/>
			<CourseBenefits />
			<CourseActionBar course={course}/>
			<CourseRecommend slug={slug} programId={course.programId}/>
		</main>
	)
}

export default CourseDetail