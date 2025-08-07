import CourseOverview from "../components/CourseOverview"
import COURSE_OVERVIEW_CONTENT from "../data/site-content.js";
import Footer from '../components/Footer';
import NavBar from "../components/navBar.jsx";
import CourseBenefits from "../components/CourseBenefits.jsx";
import CertificateOverview from "../components/CertificateOverview.jsx";



function HomePage() {

  return (
   <>
      <NavBar />
      <CourseOverview data={COURSE_OVERVIEW_CONTENT}/>
      <CourseBenefits />
      <CertificateOverview />
      <Footer />
    </>
  )
}

export default HomePage;
