import Card from "./Card";
import CheckCorrect from "@/components/icons/CheckCorrect";
import Clock from "@/components/icons/Clock";
import Laptop from "@/components/icons/Laptop";

const AdminCourseCard = ({ data, url, program_title }) => {
  return (
    <Card url={url}>	
			<img 
				src={data.img_url ||
					"https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
				} 
				alt={data.slug} 
				className="rounded-t-lg"
			/>
			<div className="flex flex-col p-4">
				<h2 className="text-xl font-semibold">{data.title}</h2>
				<h3 className="mb-3 font-[450]">ផ្នែក: <span >{program_title || data?.program?.program_title}</span></h3>
				<div className="flex justify-between">
					<div className="flex flex-col gap-2">
						<div className="flex gap-2">
							<CheckCorrect size={18} className='mt-0.5 text-primary'/>
							<h4>សញ្ញាបត្រ</h4>
						</div>
						<div className="flex gap-2">
								<Clock size={18} className='mt-0.5 text-primary'/>
								<h4>{data.duration}</h4>
						</div>
						<div className="flex gap-2">
								<Laptop size={18} className='mt-0.5 text-primary'/>
								<h4>{data.online_percent} អនឡាញ</h4>
						</div>
					</div>

					<div className=" flex flex-col justify-end">
						<h4 className="line-through text-gray-400">{data.original_price}</h4>
						<h2 className="font-medium text-lg">{data.discounted_price}</h2>
					</div>
				</div>
			</div>

    </Card>
  );
};

export default AdminCourseCard;
