import Slide from "@/components/HomePage/Slide.jsx";
import CourseOverview from "@/components/HomePage/CourseOverview.jsx";
import CourseBenefitOverview from "@/components/HomePage/CourseBenefitOverview.jsx";
import Feedback from "@/components/HomePage/Feedback.jsx";
import CertificateOverview from "@/components/HomePage/CertificateOverview.jsx";
import Partners from "@/components/HomePage/Partners.jsx";
import Experience from "@/components/HomePage/Experince.jsx";

import COURSE_OVERVIEW_CONTENT from "../data/site-content.js";
import SLIDE_DATA from '../data/slideshowcontent';

export default function HomePage() {
  return (
    <div>
      <Slide slideData={SLIDE_DATA}/>
      <CourseOverview data={COURSE_OVERVIEW_CONTENT} />
      <CourseBenefitOverview />
      <Feedback />
      <CertificateOverview />
      <Partners />
      <Experience />
    </div>
  );
}