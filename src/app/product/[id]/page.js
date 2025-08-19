import CourseBenefits from "./_components/CourseBenefits"
import CourseDescription from "./_components/CourseDescription"

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