import CourseListHeader from "@/components/CourseListPage/CourseListHeader"
import CourseManagement from "@/components/CourseListPage/CourseManagement"

import COURSE_LIST_CONTENT from "@/data/courseList-content"
import COURSE_MANAGEMENT_CONTENT from "@/data/course_management_content"

const CourseList = () => {
	return(
		<main className="mt-20">
			<CourseListHeader data={COURSE_LIST_CONTENT.HEADER}/>
			<CourseManagement COURSE_MANAGEMENT_CONTENT={COURSE_MANAGEMENT_CONTENT}/>
		</main>
	)
}

export default CourseList