import Slide from "@/app/_components/Slide.jsx";
import CourseOverview from "@/app/_components/CourseOverview.jsx";
import CourseBenefitOverview from "@/app/_components/CourseBenefitOverview.jsx";
import Feedback from "@/app/_components/Feedback.jsx";
import CertificateOverview from "@/app/_components/CertificateOverview.jsx";
import Partners from "@/app/_components/Partners.jsx";
import Experience from "@/app/_components/Experince.jsx";

import COURSE_OVERVIEW_CONTENT from "../data/site-content.js";
import SLIDE_DATA from '../data/slideshowcontent.js';

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