import ProgramCourses from "../components/ProgramCourses.jsx";
import ProgramOverview from "../components/ProgramOverview.jsx";
import PROGRAM_COURSES_CONTENT from "../data/program_courses.js";
import PROGRAM_OVERVIEW from "../data/program_overview.js";
import KeyBenefits from "../components/KeyBenefits.jsx";

function ProgramDetail (){
    return (
        <>
           <ProgramOverview data={PROGRAM_OVERVIEW}/>
           <ProgramCourses courses={PROGRAM_COURSES_CONTENT}/>
           <KeyBenefits />
        </>
    )
}

export default ProgramDetail;