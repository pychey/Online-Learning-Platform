import CourseOverview from "../components/CourseOverview"
import COURSE_OVERVIEW_CONTENT from "../data/site-content.js";
import Footer from '../components/Footer';
import NavBar from "../components/navBar.jsx";
import CourseBenefits from "../components/CourseBenefits.jsx";
import CertificateOverview from "../components/CertificateOverview.jsx";
import Feedback from "../components/feedback.jsx";
import Partners from "../components/partners.jsx";



function HomePage() {

  return (
    <>
      <NavBar />
      <CourseOverview data={COURSE_OVERVIEW_CONTENT}/>
      <CourseBenefits />
      <Feedback />
      <CertificateOverview />
      <Partners />
      <Footer />
    </>
  )
}

export default HomePage;
