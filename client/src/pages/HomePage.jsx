import CourseOverview from "../components/CourseOverview"
import COURSE_OVERVIEW_CONTENT from "../data/site-content.js";
import CertificateOverview from "../components/CertificateOverview.jsx";
import CourseBenefitsOverview from "../components/CourseBenefitOverview.jsx"
import Feedback from "../components/feedback.jsx";
import Partners from "../components/partners.jsx";
import Slide from "../components/Slide.jsx";
import Experience from "../components/Experince.jsx";



function HomePage() {

  return (
    <>
      <Slide />
      <CourseOverview data={COURSE_OVERVIEW_CONTENT}/>
      <CourseBenefitsOverview />
      <Feedback />
      <CertificateOverview />
      <Partners />
      <Experience />
    </>
  )
}

export default HomePage;
