"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect,useState } from "react"
import axios from "axios";
import Link from "next/link";

const CourseWithContent = () => {
    const router = useRouter();
	const params = useParams(); 
	const { slug } = params;

	const [loading,setLoading]=useState(true)
	const [error,setError]=useState('')
	const [courseContent, setCourseContent] = useState(null)

	useEffect(() => {
		async function fetchCourseContent() {
			try {
				const response = await axios.get(`/api/course-content/${slug}`)
				setCourseContent(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCourseContent()
	}, [])
	
	if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

	return(
		<main className="mt-20">
            <h1>{courseContent.title}</h1>
            <p>{courseContent.introduction_text}</p>
            { courseContent.starting_paragraph && (
                <p>{courseContent.starting_paragraph}</p>
            )}
            { courseContent.body_paragraph && (
                <p>{courseContent.body_paragraph}</p>
            )}
            { courseContent.ending_paragraph && (
                <p>{courseContent.ending_paragraph}</p>
            )}
            <ul>
                { courseContent.lessons.length > 0 && 
                    courseContent.lessons.map(lesson => (
                        <li key={lesson.id}><Link href={`/example-lesson/${lesson.slug}`}>{lesson.order_number}.{lesson.title}</Link></li>
                    ))
                }
            </ul>
            { courseContent.order_number == 1 && (
                <button onClick={() => router.push(`/example-course/${courseContent.courseSlug}/course-content`)}>
                    Back to Course
                </button>
            )}
            { courseContent.prevSlug && (
                <button onClick={() => router.push(`/example-course-content/${courseContent.prevSlug}`)}>
                    Previous CourseContent
                </button>
            )}
            { courseContent.nextSlug && (
                <button onClick={() => router.push(`/example-course-content/${courseContent.nextSlug}`)}>
                    Next CourseContent
                </button>
            )}
            { courseContent.order_number == courseContent.totalCourseContent && (
                <button onClick={() => router.push(`/example-course/${courseContent.courseSlug}/course-content`)}>
                    Return to Course
                </button>
            )}
		</main>
	)
}

export default CourseWithContent