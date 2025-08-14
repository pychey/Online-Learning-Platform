import CourseListHeader from "../components/CourseListHeader"
import CourseManagement from "../components/CourseManagement"

import COURSE_LIST_CONTENT from "../data/courseList-content.js"
import COURSE_MANAGEMENT_CONTENT from "../data/course_management_content.js";

const CourseListPage = () => {

  return(
    <>
      <CourseListHeader data={COURSE_LIST_CONTENT.HEADER}/>
      <CourseManagement COURSE_MANAGEMENT_CONTENT={COURSE_MANAGEMENT_CONTENT}/>
    </>
  )
}

export default CourseListPage;