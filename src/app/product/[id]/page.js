import CourseBenefits from "@/components/CourseDetailPage/CourseBenefits"
import CourseDescription from "@/components/CourseDetailPage/CourseDescription"

import COURSE_DESCRIPTION from "@/data/course_description"

const CourseDetail = () => {
	return(
		<main className="mt-20">
			<CourseDescription data={COURSE_DESCRIPTION}/>
			<CourseBenefits />
		</main>
	)
}

export default CourseDetail