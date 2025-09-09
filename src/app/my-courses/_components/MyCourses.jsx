"use client"

import Link from "next/link";
import PlusIcon from "@/components/icons/PlusIcon";

const MY_COURSES_DATA = {
  title: "ចាប់ផ្តើមវគ្គសិក្សាថ្មី",
  description: (
    <>
      ដើម្បីបន្ថែមវគ្គសិក្សាថ្មី សូមទិញវគ្គសិក្សាពីបញ្ជីវគ្គសិក្សារបស់យើង។
      អ្នកនឹងទទួលបានការចូលប្រើវគ្គសិក្សានោះភ្លាមៗ ហើយអាចបញ្ចប់វានៅពេលណាក៏បានតាមតម្រូវការរបស់អ្នក។ 
      អ្នកនឹងទទួលបានវិញ្ញាបនបត្រនៅចុងបញ្ចប់នៃវគ្គសិក្សារៀងៗខ្លួន។
    </>
  ),
  buttonText: "បន្ថែមវគ្គសិក្សាថ្មី",
};

const MyCourses = ({courses}) => {

	return(
		<section 
			className="px-4 tablet:px-20 py-10 w-full bg-white leading-relaxed" 
		>	
			<div className="text-center mx-auto p-5 pb-6 w-full max-w-[800px] bg-[#f5f5f5] border 
										border-[#CBCBCB] rounded-xs"
			>	
				<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 w-full text-sm text-left pt-4 pb-8">
					{courses.map((course,index)=>(
						<Link key={index} href={`/course/${course.slug}`}>
							<div className=" flex flex-col relative pb-2 border-1 rounded-sm border-gray-300 gap-2">
								<div className="w-full h-38"><img className="w-full h-full object-cover" src={course.image} alt="course image" /></div>
								<p className="pl-1">{course.title}</p>
								<span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded shadow-md">
									ចុះឈ្មោះហើយ
								</span>
							</div>
						</Link>
					))}
				</div>
				<h1 className="text-xl font-medium">{MY_COURSES_DATA.title}</h1>
				<p className="leading-relaxed py-1 mt-3 font-[450] text-sm tablet:text-base">{MY_COURSES_DATA.description}</p>
				<button className="flex items-center gap-1.5 mx-auto mt-5 px-4 py-2 bg-primary 
												hover:bg-primary-hover rounded-sm cursor-pointer"
				>
					<PlusIcon color="white" />
					<p className="font-medium text-white">{MY_COURSES_DATA.buttonText}</p>
				</button>
			</div>
		</section>
	)
}

export default MyCourses