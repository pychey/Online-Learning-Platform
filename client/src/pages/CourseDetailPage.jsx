import CourseBenefits from "../components/CourseBenefits"
import CourseDescription from "../components/CourseDescription";
import COURSE_DESCRIPTION from "../data/course_description";

const CourseDetailPage = () => {

  return(
    <main className="mt-20"> 
      <CourseDescription data={COURSE_DESCRIPTION} />
			<CourseBenefits />
    </main>
  )
}

export default CourseDetailPage