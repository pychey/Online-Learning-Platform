'use client'

import GlobeIcon from "@/components/icons/GlobeIcon"
import { useRouter } from "next/navigation";

const EDUCATION_FOR_GOOD = {
  title: "ការអប់រំសម្រាប់អត្ថប្រយោជន៍សាធារណៈ",
  description: (
  	<>
			អេសេត គាំទ្រផ្នែកហិរញ្ញវត្ថុដល់គម្រោងអប់រំមិនរកប្រាក់ចំណេញនៅ: 
			<br/> 
			កាមេរូន អ៊ុយហ្គង់ដា ហ្គាណា កេនយ៉ា ឡាវ និងហ្វីលីពីន
		</>
	),
	buttonText: "គម្រោងដែលយើងគាំទ្រ",
}

const EducationForGood = () => {
	const router = useRouter();
	return(
		<section 
			className="w-full px-7 py-14 relative overflow-hidden"
		>
			<div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
        style={{ 
					backgroundImage: `url(/Unity.jpg)`, 
					opacity: 0.35, zIndex: 0 }} 
      />
			
			<div className="relative flex flex-col items-center text-center z-10">
				<GlobeIcon size={70} className="text-primary" />
				<h1 className="mt-4 font-medium text-2xl">{EDUCATION_FOR_GOOD.title}</h1>
				<p className="mt-3 tablet:text-xl text-lg">
					{EDUCATION_FOR_GOOD.description}
				</p>
				<button 
					onClick={() => router.push('/social-impact')}
					className="mt-7 px-[18px] py-2 bg-primary hover:bg-primary-hover font-medium rounded-sm 
									text-white cursor-pointer"
				>
					{EDUCATION_FOR_GOOD.buttonText}
				</button>
			</div>
		</section>
	)
}

export default EducationForGood