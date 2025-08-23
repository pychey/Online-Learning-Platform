import CourseBenefits from "./_components/CourseBenefits"
import CourseDescription from "./_components/CourseDescription"
import CourseActionBar from "./_components/CourseActionBar"
import CourseRecommend from "./_components/CourseRecommend"

import COURSE_DESCRIPTION from "@/data/course_description"
import COURSES_RECOMMEND from "@/data/course_recommend";

const CourseDetail = () => {
	return(
		<main className="mt-20">
			<CourseDescription data={COURSE_DESCRIPTION}/>
			<CourseBenefits />
			<CourseActionBar />
			<CourseRecommend data={COURSES_RECOMMEND}/>
		</main>
	)
}

export default CourseDetail