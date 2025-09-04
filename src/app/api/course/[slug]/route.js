import { NextResponse } from "next/server";

const courses = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg",
    video_link:"https://www.youtube.com/embed/KDsXu30_kUQ?si=4GCvgXaJtH2PjjsS&autoplay=1",
    certificate_type: "Completion",
    description:"This is description",
    duration: "8 weeks",
    online_percent: 100,
    slug: "intro-to-web-development",
    rating: 3.3,
    original_price: 200,
    discounted_price: 120,
    discount_percent: 40,
    title: "Introduction to Web Development",
    study_type: "Online",
    language: "English",
    level: "Beginner",
    skills:["rean jes","rean jes","rean jes"],
    about:[
      "This is about",
      "This is About",
      "This is About",
      "This is About"
    ],
    access: "Lifetime",
    certificate_img: "https://example.com/certificates/course1.png"
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg",
    video_link:"https://www.youtube.com/embed/KDsXu30_kUQ?si=4GCvgXaJtH2PjjsS",
    certificate_type: "Professional",
    description:"This is description",
    duration: "12 weeks",
    online_percent: 80,
    slug: "advanced-data-science",
    rating: 4.9,
    original_price: 400,
    discounted_price: 250,
    discount_percent: 37,
    title: "Advanced Data Science",
    study_type: "Hybrid",
    language: "English",
    level: "Advanced",
    skills:["rean jes","rean jes","rean jes"],
    about:[
      "This is about",
      "This is About",
      "This is About",
      "This is About"
    ],
    access: "1 Year",
    certificate_img: "https://example.com/certificates/course2.png"
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg",
    video_link:"https://www.youtube.com/embed/KDsXu30_kUQ?si=4GCvgXaJtH2PjjsS",
    certificate_type: "Completion",
    description:"This is description",
    duration: "6 weeks",
    online_percent: 90,
    slug: "python-for-beginners",
    rating: 4.5,
    original_price: 150,
    discounted_price: 90,
    discount_percent: 40,
    title: "Python for Beginners",
    study_type: "Online",
    language: "English",
    level: "Beginner",
    skills:["rean jes","rean jes","rean jes"],
    about:[
      "This is about",
      "This is About",
      "This is About",
      "This is About"
    ],
    access: "Lifetime",
    certificate_img: "https://example.com/certificates/course3.png"
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg",
    video_link:"https://www.youtube.com/embed/KDsXu30_kUQ?si=4GCvgXaJtH2PjjsS",
    certificate_type: "Professional",
    description:"This is description",
    duration: "10 weeks",
    online_percent: 70,
    slug: "fullstack-development",
    rating: 4.8,
    original_price: 350,
    discounted_price: 210,
    discount_percent: 40,
    title: "Fullstack Web Development",
    study_type: "Hybrid",
    language: "English",
    level: "Intermediate",
    skills:["rean jes","rean jes","rean jes"],
    about:[
      "This is about",
      "This is About",
      "This is About",
      "This is About"
    ],
    access: "2 Years",
    certificate_img: "https://example.com/certificates/course4.png"
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg",
    video_link:"https://www.youtube.com/embed/KDsXu30_kUQ?si=4GCvgXaJtH2PjjsS",
    certificate_type: "Completion",
    descripition:"This is description", 
    duration: "5 weeks",
    online_percent: 100,
    slug: "ui-ux-design",
    rating: 4.6,
    original_price: 180,
    discounted_price: 120,
    discount_percent: 33,
    title: "UI/UX Design Fundamentals",
    study_type: "Online",
    language: "English",
    level: "Beginner",
    skills:["rean jes","rean jes","rean jes"],
    about:[
      "This is about",
      "This is About",
      "This is About",
      "This is About"
    ],
    access: "Lifetime",
    certificate_img: "https://example.com/certificates/course5.png"
  }
];

export async function GET(request, { params }) {

  const { slug } = await params;

  for(let course of courses){
    if(course.slug===slug){
      return NextResponse.json(course,{status:200})
    }
  }

  return NextResponse.json({ message:"Not found" }, { status: 404 });
}


