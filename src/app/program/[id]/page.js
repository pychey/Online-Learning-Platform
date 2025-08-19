import ProgramOverview from "@/components/ProgramDetailPage/ProgramOverview"
import ProgramCourses from "@/components/ProgramDetailPage/ProgramCourses"
import KeyBenefits from "@/components/ProgramDetailPage/KeyBenefits"
import OtherProgramCertificate from "@/components/ProgramDetailPage/OtherProgramCertificate"

import PROGRAM_OVERVIEW from "@/data/program_overview"
import PROGRAM_COURSES_CONTENT from "@/data/program_courses"

const ProgramDetailPage = () => {
  return(
    <main>
      <ProgramOverview data={PROGRAM_OVERVIEW}/>
      <ProgramCourses courses={PROGRAM_COURSES_CONTENT}/>
      <KeyBenefits />
      <OtherProgramCertificate />
    </main>
  )
}

export default ProgramDetailPage