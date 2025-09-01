"use client";

import { useRef, useState, useEffect } from "react";
import CourseListHeader from "./_components/CourseListHeader";
import CourseManagement from "./_components/CourseManagement";

const CourseList = () => {
  const categoryRefs = useRef({});
  const [content, setContent] = useState([]);
  const [headerData, setHeaderData] = useState({
    totalCourses: 0,
    totalPrograms: 0,
    categories: [],
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await res.json();
        setContent(data);
        const totalCourses = data.reduce((sum, section) => sum + section.courses.length, 0);
        const totalPrograms = data.length;
        const categories = data.map((section) => ({
          id: section.id,
          name: section.title,
        }));
        
        setHeaderData({
          totalCourses,
          totalPrograms,
          categories,
        });

      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleCategoryClick = (categoryId) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block:"end"});
    }
  };

  return (
    <main className="mt-20">
      <CourseListHeader data={headerData} onCategoryClick={handleCategoryClick} />
      <CourseManagement ref={categoryRefs} content={content} />
    </main>
  );
};

export default CourseList;