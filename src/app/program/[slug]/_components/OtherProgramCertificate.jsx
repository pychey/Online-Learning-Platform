'use client'

import { englishToKhmerNumber } from '@/lib/englishToKhmerNumber';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const OtherProgramCertificate = ({ slug }) => {
  const [loading,setLoading] = useState(true)
	const [error,setError] = useState('')
  const [otherPrograms, setOtherPrograms] = useState([])

	useEffect(() => {
		async function fetchPrograms() {
			try {
				const response = await axios.get(`/api/program`)
				setOtherPrograms(response.data.filter(program => program.slug !== slug))
			} catch (error) {
				console.log(error)
				setError(error.message)
			} finally {
				setLoading(false)
			}
		}
		fetchPrograms()
	}, [])

  if (loading) return <h1 className="mt-20">Loading...</h1>;
	if (error) return <h1 className="mt-20">{error}</h1>;

  return (
    <div className="flex flex-col gap-11 my-15 mx-auto max-w-[1080px] px-4 w-full">
      <h3 className='text-center text-2xl tablet:text-3xl font-medium'>សញ្ញាបត្រកម្មវិធីសិក្សាផ្សេងៗ</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-10 justify-between">
        {otherPrograms.map((program) => (
          <div key={program.id} className="flex flex-col items-center gap-4">
            <Link href={`/program/${program.slug}`}><img src={program.logo_url} alt={program.slug} className="w-20 h-20" /></Link>
            <h4 className="mt-2 text-lg font-medium text-center max-w-40 leading-relaxed">
              ផ្នែក{program.program_title}
            </h4>
            <p className="text-sm text-center flex flex-wrap justify-center gap-0 leading-7">
              {englishToKhmerNumber(program.courses.length)} វគ្គសិក្សា &middot;
              <Link href={`/program/${program.slug}`} className="ml-1 text-primary underline">
                អានបន្ថែម
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProgramCertificate;