"use client"

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/ui/DashboardHeader";
import MyCourses from "./_components/MyCourses";
import { useSession } from "next-auth/react";
import axios from "axios";

const MyCoursesPage = () => {
  const { data: session, status } = useSession();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") getCourse();
    else if (status === "unauthenticated") {
      setError("You must be logged in to view your courses.");
      setLoading(false);
    }
  }, [status]);
  
  const getCourse = async () => {
    try {
      const response = await axios.get(`/api/user/${session?.user.id}/course`)
      setCourse(response.data);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1 className="mt-20">Loading...</h1>;

  if (error) return <h1 className="mt-20">{error}</h1>;

  return (
    <main className="mt-20">
      <DashboardHeader />
      <MyCourses courses={course} />
    </main>
  );
};

export default MyCoursesPage;