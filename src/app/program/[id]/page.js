import ProgramOverview from "./_components/ProgramOverview"
import ProgramCourses from "./_components/ProgramCourses"
import KeyBenefits from "./_components/KeyBenefits"
import OtherProgramCertificate from "./_components/OtherProgramCertificate"

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