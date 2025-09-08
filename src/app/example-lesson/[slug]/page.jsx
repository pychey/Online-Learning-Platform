"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect,useState } from "react"
import axios from "axios";

const CourseWithContent = () => {
    const router = useRouter();
	const params = useParams(); 
	const { slug } = params;

	const [loading,setLoading]=useState(true)
	const [error,setError]=useState('')
	const [lesson, setLesson] = useState(null)

	useEffect(() => {
		async function fetchLesson() {
			try {
				const response = await axios.get(`/api/lessonn/${slug}`)
				setLesson(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchLesson()
	}, [])
	
	if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

	return(
		<main className="mt-20">
            <h1>{lesson.title}</h1>
            { lesson.lessonContents.length > 0 && 
                lesson.lessonContents.map(lessonContent => (
                    lessonContent.content_type == 'heading' ? (
                        <h1 key={lessonContent.id}>{lessonContent.content}</h1>
                    )
                    : lessonContent.content_type == 'text' ? (
                        <p key={lessonContent.id}>{lessonContent.content}</p>
                    )
                    : lessonContent.content_type == 'list' ? (
                        <li key={lessonContent.id}>{lessonContent.content}</li>
                    )
                    : lessonContent.content_type == 'space' ? (
                        <hr key={lessonContent.id}></hr>
                    )
                    : lessonContent.content_type == 'image' ? (
                        <img key={lessonContent.id} src={lessonContent.content} />
                    )
                    : <p key={lessonContent.id}>Incorrect Content Type</p>
                ))
            }
            <q>{lesson.key_takeaway_text}</q><br/>
            { lesson.order_number == 1 && (
                <button onClick={() => router.push(`/example-course-content/${lesson.courseContentSlug}`)}>
                    Back to CourseContent
                </button>
            )}
            { lesson.prevSlug && (
                <button onClick={() => router.push(`/example-lesson/${lesson.prevSlug}`)}>
                    Previous Lesson
                </button>
            )}
            { lesson.nextSlug && (
                <button onClick={() => router.push(`/example-lesson/${lesson.nextSlug}`)}>
                    Next Lesson
                </button>
            )}
            { lesson.order_number == lesson.totalLesson && (
                <button onClick={() => router.push(`/example-course-content/${lesson.nextCourseContentSlug}`)}>
                    Next CourseContent
                </button>
            )}
		</main>
	)
}

export default CourseWithContent