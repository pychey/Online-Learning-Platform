// "use client"

// import { useState,useEffect } from "react"
// import DashboardHeader from "@/components/ui/DashboardHeader"
// import MyCourses from "./_components/MyCourses"
// import { getCourseByUser } from "@/lib/course"

// const MyCoursesPage = () => {

// 	const [course,setCourse]=useState(null)
// 	const [loading,setLoading]=useState(true)
// 	const [error,setError]=useState("")


// 	useEffect(()=>{
// 		getCourse();
// 	},[])

// 	const getCourse =async()=>{
// 		try {
// 			const data=await getCourseByUser();
// 			setCourse(data)
// 			console.log(course)
// 		} catch (error) {
// 			setError(error.response.data.message)
// 		}finally{
// 			setLoading(false)
// 		}
// 	}

// 	if (loading) {
// 		return <h1 className="mt-20">Loading...</h1>;
// 	}

// 	if (error) {
// 		return <h1 className="mt-20">{error}</h1>;
// 	}


// 	return(
// 		<main className="mt-20">
// 			<DashboardHeader />
// 			<MyCourses courses={course}/>
// 		</main>
// 	)
// }

// export default MyCoursesPage


"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/ui/DashboardHeader";
import MyCourses from "./_components/MyCourses";
import { getCourseByUser } from "@/lib/course";

const MyCoursesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.replace("/login");
      return;
    }
    getCourse();
    // eslint-disable-next-line
  }, [session, status]);

  const getCourse = async () => {
    try {
      const data = await getCourseByUser();
      setCourse(data);
    } catch (error) {
      setError(error?.response?.data?.message || "Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return <h1 className="mt-20">Loading...</h1>;
  }

  if (error) {
    return <h1 className="mt-20">{error}</h1>;
  }

  return (
    <main className="mt-20">
      <DashboardHeader />
      <MyCourses courses={course} />
    </main>
  );
};

export default MyCoursesPage;