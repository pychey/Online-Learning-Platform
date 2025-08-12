import CourseBenefits from "../components/CourseBenefits"
import CourseDescription from "../components/CourseDescription";

const CourseDetailPage = () => {

  return(
    <main className="mt-20">
      <CourseDescription />
			<CourseBenefits />
    </main>
  )
}

export default CourseDetailPage