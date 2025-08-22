import CourseBenefits from "./_components/CourseBenefits"
import CourseDescription from "./_components/CourseDescription"

import COURSE_DESCRIPTION from "@/data/course_description"
import CourseRecommend from "./_components/CourseRecommend"
import COURSES_RECOMMEND from "@/data/course_recommend";

const CourseDetail = () => {
	return(
		<main className="mt-20">
			<CourseDescription data={COURSE_DESCRIPTION}/>
			<CourseBenefits />
			<CourseRecommend data={COURSES_RECOMMEND}/>
		</main>
	)
}

export default CourseDetail