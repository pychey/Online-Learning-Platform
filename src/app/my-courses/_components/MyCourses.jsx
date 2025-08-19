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

const MyCourses = () => {

	return(
		<section 
			className="px-4 tablet:px-20 py-10 w-full bg-white leading-relaxed" 
		>
			<div className="text-center mx-auto p-5 pb-6 w-full max-w-[800px] bg-[#f5f5f5] border 
										border-[#CBCBCB] rounded-xs"
			>
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