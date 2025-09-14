"use client"

import Link from "next/link";
import PlusIcon from "@/components/icons/PlusIcon";
import { useRouter } from "next/navigation";

const MyCourses = ({courses}) => {
	const router = useRouter();
	
	return(
		<section 
			className="px-4 tablet:px-20 py-10 w-full bg-white leading-relaxed" 
		>	
			<div className="text-center mx-auto p-5 pb-6 w-full max-w-[800px] bg-[#f5f5f5] border 
										border-[#CBCBCB] rounded-xs"
			>	
				<h1 className="text-xl font-medium">{courses.length > 0 ? "វគ្គសិក្សារបស់ខ្ញុំ" : "ចាប់ផ្តើមវគ្គសិក្សាថ្មី"}</h1>
				<div className="mt-8 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 w-full text-sm text-left">
					{courses.map((course,index)=>(
						<Link key={index} href={`/course/${course.slug}`}>
							<div className="relative flex flex-col border border-gray-300 text-sm w-full">
								<img src={course.img_url ||
									"https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
								} alt={course.slug} className='w-full z-10 h-[150px] object-cover' />
								<h2 className='font-medium flex items-center py-3 px-4'>{course.title}</h2>
								<span className="absolute z-10 top-2 -left-3 bg-primary text-white text-sm font-medium px-3 py-1">
									បានចូលរៀន
								</span>
								<span className="absolute top-2 -left-3 bg-primary-hover w-8 h-7 origin-bottom-left rotate-25"></span>
							</div>
						</Link>
					))}
				</div>
				<p className="mt-6 leading-relaxed py-1 font-[450] text-sm tablet:text-base text-gray-700">
					ដើម្បីបន្ថែមវគ្គសិក្សាថ្មី សូមទិញវគ្គសិក្សាពីបញ្ជីវគ្គសិក្សារបស់យើង។ អ្នកនឹងទទួលបានការចូលប្រើវគ្គសិក្សានោះភ្លាមៗ ហើយអាចបញ្ចប់វានៅពេលណាក៏បានតាមតម្រូវការរបស់អ្នក។ អ្នកនឹងទទួលបានវិញ្ញាបនបត្រនៅចុងបញ្ចប់នៃវគ្គសិក្សារៀងៗខ្លួន។
				</p>
				<button className="flex items-center gap-1.5 mx-auto mt-5 px-4 py-2 bg-primary hover:bg-primary-hover rounded-sm cursor-pointer" onClick={() => router.push('/courselist')}>
					<p className="font-medium text-white">បន្ថែមវគ្គសិក្សាថ្មី</p>
					<PlusIcon color="white" size={20}/>
				</button>
			</div>
		</section>
	)
}

export default MyCourses