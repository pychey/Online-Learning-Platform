import ClockIcon from '@/components/icons/ClockIcon';
import GroupIcon from '@/components/icons/GroupIcon';
import LevelIcon from '@/components/icons/LevelIcon';
import StarIcon from '@/components/icons/StarIcon';
import GlobalIcon from '@/components/icons/GlobalIcon';
import ComputerIcon from '@/components/icons/ComputerIcon';
import { englishToKhmerNumber } from '@/lib/englishToKhmerNumber';
import StarRating from '@/components/icons/StarRating';
import RightArrow from '@/components/icons/RightArrow';
import Tick from '@/components/icons/Tick';
import VideoPreview from '@/components/ui/VideoPreview';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { useRouter } from 'next/navigation';

const CourseDescription = ({ course, admin = false, isPaid = false }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = async () => {
    const isExist = await addToCart(course)
    router.push(`/cart?isExist=${Number(isExist)}&courseTitle=${course.title}`)
  }

  return (
    <div className={`grid grid-cols-1 laptop:grid-cols-[1.5fr_1fr] laptop:grid-rows-[minmax(140px,auto)_1fr] gap-6 laptop:gap-8 ${admin ? "w-full p-8" : "max-w-[1100px] mt-7 p-4"} mx-auto  text-base`}>
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <h1 className="text-xl tablet:text-2xl laptop:text-3xl leading-relaxed font-medium text-black">{course.title}</h1>
        <div className="mt-4 flex items-center gap-2">
          <StarRating ratingNumber={false} rating={course.rating} />
          <span>( {englishToKhmerNumber(course.rating)} ការវាយតម្លៃរបស់អ្នកសិក្សា )</span>
        </div>

        <p className="mt-4 leading-relaxed">{course.introduction_text}</p>
      </div>

      <div className="col-span-1 laptop:col-start-2 laptop:col-end-3 laptop:row-span-full w-full mt-2 pb-4 laptop:border-1 laptop:border-gray-300">
        <VideoPreview thumbnail={course.img_url} youtubeLink={course.youtube_url} />

        <div className="mt-4 laptop:mt-2 flex flex-col laptop:flex-row gap-3 items-center laptop:px-4">
          <h2 className='laptop:hidden'>សន្សំ {course.discount_percent} លើវគ្គសិក្សាឥឡូវនេះ :</h2>
          <div className="flex flex-row laptop:flex-col gap-2 laptop:gap-0 items-center laptop:items-start laptop:justify-center pr-5 laptop:pt-2">
            <p className="text-gray-400 line-through text-lg laptop:text-base">{course.original_price}</p>
            <p className="text-3xl laptop:text-2xl font-medium">{course.discounted_price}</p>
          </div>
          <button 
          disabled={isPaid}
          onClick={handleAddToCart}
          className="w-[90%] rounded-sm text-white text-base tablet:text-lg py-3 font-medium bg-primary hover:bg-primary-hover transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 mt-2">
            {isPaid ? 'វគ្គសិក្សាបានទិញរួច' : 'បន្ថែមចូលកន្ត្រក' } {!isPaid && <RightArrow size={12}/>} 
          </button>
        </div>

        <hr className='h-[1px] border-none bg-gray-300 mt-6 laptop:mt-4 w-[85%] mx-auto'></hr>

        <div className='flex flex-col gap-5 laptop:gap-3 mt-6 laptop:mt-4 px-[5%] text-base'>
          <div className="flex items-start">
            <ComputerIcon className='text-primary w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ប្រភេទ: </span>
            <span>{course.study_type}</span>
          </div>

          <div className="flex items-start">
            <ClockIcon className='text-primary  w-[24px] laptop:w-[16px]' />
            <span className="ml-6 font-semibold laptop:font-medium w-30">រយៈពេល: </span>
            <span>{course.duration}</span>
          </div>

          <div className="flex items-start">
            <StarIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ទទួលបាន: </span>
            <span>{course.certificate_type}</span>
          </div>

          <div className="flex items-start">
            <GlobalIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ភាសា: </span>
            <span>{course.language}</span>
          </div>

          <div className="flex items-start">
            <LevelIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">កម្រិត: </span>
            <span>{course.level}</span>
          </div>

          <div className="flex items-start">
            <GroupIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ការប្រើប្រាស់: </span>
            <span>{course.access}</span>
          </div>

          <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

          <div className="flex flex-col laptop:flex-row items-center gap-6 mt-2">
            <Link href={`/program/${course.program.slug}`}><img src={course.program.logo_url} alt='icon' className='w-[100px] laptop:w-[60px]'/></Link>
            <p>វគ្គសិក្សានេះជាផ្នែកមួយនៃវគ្គ<Link href={`/program/${course.program.slug}`} className="mx-1 text-primary underline">{course.program.program_title}</Link>កម្មវិធីសិក្សា</p>
          </div>
        </div>
      </div>

      <div className='col-start-1 col-end-2 row-span-1 laptop:row-start-2 laptop:row-end-3 mt-2'>
        <h2 className="text-lg laptop:text-2xl font-medium text-black">ជំនាញដែលអ្នកនឹងសិក្សា</h2>
        <div className='flex flex-col gap-2 mt-4'>
          <div className="flex gap-1 text-base">
            <Tick className='text-primary' size={24}/>
            <span>{course.first_skill}</span>
          </div>
          <div className="flex gap-1 text-base">
            <Tick className='text-primary' size={24}/>
            <span>{course.second_skill}</span>
          </div>
          <div className="flex gap-1 text-base">
            <Tick className='text-primary' size={24}/>
            <span>{course.third_skill}</span>
          </div>
        </div>

        <div className="mt-10  laptop:mt-10">
          <h2 className="text-lg laptop:text-2xl font-medium text-black">អំពីវគ្គសិក្សានេះ</h2>
          <div className="text-base flex flex-col gap-4 leading-relaxed mt-4">
            <p>{course.main_text}</p>
            <p>{course.detail_text}</p>
            <p>{course.conclusion_text}</p>
          </div>
        </div>
      </div>

      <hr className='col-span-full h-[1px] border-none bg-gray-300 mt-4 max-w-[1112px] w-full mx-auto'/>
    </div>
  );
};

export default CourseDescription;