import LaptopIcon from "@/components/icons/Laptop"
import DoorIcon from "@/components/icons/DoorIcon"
import ManIcon from "@/components/icons/ManIcon"
import ArrowShrinkIcon from "@/components/icons/ArrowShrinkIcon"

const PILLARS = [
	{
		title: "ឌីជីថល",
		description: "វគ្គសិក្សា ១០០% តាមអ៊ីនធឺណិត ធ្វើបានដោយខ្លួនឯង និងប្រើអត្ថបទសម្រាប់ការស្វែងយល់ប្រសើរជាងមុន។",
		icon: LaptopIcon
	},
	{
		title: "ខ្លីខ្ពស់",
		description: "ជំពូករៀនខ្លីៗជួយឲ្យអ្នកអាចជំនាញចំណេះដឹងអាជីវកម្មបានយ៉ាងឆាប់រហ័ស។",
		icon: ArrowShrinkIcon
	},
	{
		title: "ងាយស្រួល",
		description: "វគ្គសិក្សាតម្លៃសមរម្យ មានសិទ្ធិប្រើបានជារៀងរហូត ដោយមិនត្រូវការចំណេះដឹងជាមុន។",
		icon: DoorIcon
	},
	{
		title: "អនុវត្តបានពិតប្រាកដ",
		description: "ផ្ដោតលើប្រធានបទ ឧទាហរណ៍ និងករណីសិក្សាដែលសមរម្យនឹងពិភពអាជីវកម្មសព្វថ្ងៃ។",
		icon: ManIcon
	},
]


const FourPillars = () => {

	return(
		<section className="py-9 w-full border border-[#CCCCCC] bg-[#F7F7F7] ">
			<div className="mx-auto px-4 py-6 max-w-[1080px]">
				<h1 className="w-full text-center mb-9 font-semibold text-2xl"
				>
					គោលការណ៍សិក្សាចម្បង ៤យ៉ាងរបស់យើង
				</h1>
				<div className="grid grid-cols-1 laptop:grid-cols-4 gap-2.5 px-2.5 pt-3 w-full">
					{PILLARS.map((pillar, index) => (
						<div 
							className="flex flex-col items-center px-4 py-9 box-content border border-[#CCCCCC]"
							key={index}
						>
							<pillar.icon size={70} className={"text-primary"}/>
							<h1 className="mt-6 text-[22px] font-medium">{pillar.title}</h1>
							<p className="text-center mt-5">{pillar.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FourPillars