'use client'

import ProgramOverview from "./_components/ProgramOverview"
import ProgramCourses from "./_components/ProgramCourses"
import KeyBenefits from "./_components/KeyBenefits"
import OtherProgramCertificate from "./_components/OtherProgramCertificate"
import ProgramFaq from "./_components/ProgramFaq"
import SkillCertificate from "./_components/SkillCertificate"
import PROGRAM_COURSES_CONTENT from "@/data/program_courses"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"

const ProgramDetailPage = () => {
  const params = useParams(); 
	const { slug } = params;

	const [loading,setLoading] = useState(true)
	const [error,setError] = useState('')
	const [program, setProgram] = useState(null)

	useEffect(() => {
		async function fetchProgram() {
			try {
				const response = await axios.get(`/api/program/${slug}`)
				setProgram(response.data)
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		fetchProgram()
	}, [])
	
	if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

  return(
    <main>
      <ProgramOverview program={program}/>
      <ProgramCourses courses={program.courses}/>
      <KeyBenefits programCertificateName={program.certificate_name}/>
      <SkillCertificate programTitle={program.program_title}/>
      <ProgramFaq />
      <OtherProgramCertificate slug={slug}/>
    </main>
  )
}

export default ProgramDetailPage