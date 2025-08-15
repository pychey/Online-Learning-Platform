import ProgramOverview from "../components/ProgramOverview.jsx";
import PROGRAM_OVERVIEW from "../data/program_overview.js";


function ProgramDetail (){
    return (
        <>
           <ProgramOverview data={PROGRAM_OVERVIEW}/>
        </>
    )
}

export default ProgramDetail;