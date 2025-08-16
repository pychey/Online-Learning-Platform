import ProgramOverview from "../components/ProgramOverview.jsx";
import PROGRAM_OVERVIEW from "../data/program_overview.js";
import KeyBenefits from "../components/KeyBenefits.jsx";

function ProgramDetail (){
    return (
        <>
           <ProgramOverview data={PROGRAM_OVERVIEW}/>
           <KeyBenefits />
        </>
    )
}

export default ProgramDetail;