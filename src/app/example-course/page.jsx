"use client"

import { useEffect,useState } from "react"
import axios from "axios";
import Link from "next/link";

const CourseWithContent = () => {
	const [loading,setLoading]=useState(true)
	const [error,setError]=useState('')
	const [courses, setCourses] = useState(null)

	useEffect(() => {
		async function fetchCourses() {
			try {
				const response = await axios.get(`/api/course`)
				setCourses(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCourses()
	}, [])
	
	if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

	return(
		<main className="mt-20">
            <h1>COURSES</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}><Link href={`/example-course/${course.slug}/course-content`}>{course.id}.{course.title}</Link></li>
                ))}
            </ul>
		</main>
	)
}

export default CourseWithContent