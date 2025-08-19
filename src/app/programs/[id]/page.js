import ProgramOverview from "@/app/programs/[id]/_components/ProgramOverview"
import ProgramCourses from "@/app/programs/[id]/_components/ProgramCourses"
import KeyBenefits from "@/app/programs/[id]/_components/KeyBenefits"

import PROGRAM_OVERVIEW from "@/data/program_overview"
import PROGRAM_COURSES_CONTENT from "@/data/program_courses"

const ProgramDetailPage = () => {
  return(
    <main>
      <ProgramOverview data={PROGRAM_OVERVIEW}/>
      <ProgramCourses courses={PROGRAM_COURSES_CONTENT}/>
      <KeyBenefits />
    </main>
  )
}

export default ProgramDetailPage