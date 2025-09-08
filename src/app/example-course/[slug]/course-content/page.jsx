"use client"

import { useParams } from "next/navigation";
import { useEffect,useState } from "react"
import axios from "axios";
import Link from "next/link";

const CourseWithContent = () => {
	const params = useParams(); 
	const { slug } = params;

	const [loading,setLoading]=useState(true)
	const [error,setError]=useState('')
	const [course, setCourse] = useState(null)

	useEffect(() => {
		async function fetchCourse() {
			try {
				const response = await axios.get(`/api/course/${slug}/course-content`)
				setCourse(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCourse()
	}, [])
	
	if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

	return(
		<main className="mt-20">
            <h1>{course.title}</h1>
            <p>{course.courseContents.length} Course Contents</p>
            <h2>Course Content</h2>
            <ul>
                {course.courseContents.map(content => (
                    <li key={content.id}><Link href={`/example-course-content/${content.slug}`}>{content.order_number}.{content.title}</Link></li>
                ))}
            </ul>
		</main>
	)
}

export default CourseWithContent