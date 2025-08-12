import CourseListHeader from "../components/CourseListHeader"
import CourseManagement from "../components/CourseManagement"

import COURSE_LIST_CONTENT from "../data/courseList-content"

const CourseListPage = () => {

  return(
    <>
      <CourseListHeader data={COURSE_LIST_CONTENT.HEADER}/>
      <CourseManagement />
    </>
  )
}

export default CourseListPage;