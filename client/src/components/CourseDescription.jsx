import ClockIcon from './icons/ClockIcon';
import GroupIcon from './icons/GroupIcon';
import LevelIcon from './icons/LevelIcon';
import StarIcon from './icons/StarIcon';
import GlobalIcon from './icons/GlobalICon';
import ComputerIcon from './icons/ComputerIcon';
import { englishToKhmerNumber } from '../utils/englishToKhmerNumber';
import StarRating from './icons/StarRating';
import RightArrow from './icons/RightArrow';
import Tick from './icons/Tick';
import VideoPreview from './VideoPreview';

const CourseDescription = ({ data }) => {

  return (
    <div className="grid grid-cols-1 laptop:grid-cols-[1.5fr_1fr] laptop:grid-rows-[minmax(140px,auto)_1fr] gap-6 laptop:gap-8 max-w-[1100px] mx-auto mt-27 p-4 text-base">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <h1 className="text-xl tablet:text-2xl laptop:text-3xl leading-relaxed font-medium text-black">{data.title}</h1>
        <div className="flex items-center gap-2 mt-4">
          <StarRating ratingNumber={false} rating={data.rating} />
          <span>( {englishToKhmerNumber(data.rating)} ការវាយតម្លៃរបស់អ្នកសិក្សា )</span>
        </div>

        <p className="mt-4 leading-relaxed">{data.description}</p>
      </div>

      <div className="col-span-1 laptop:col-start-2 laptop:col-end-3 laptop:row-span-full w-full mt-2 pb-4 laptop:border-1 laptop:border-gray-300">
        <VideoPreview thumbnail={data.thumbnailImage} youtubeLink={data.youtubeLink} />

        <div className="mt-4 laptop:mt-2 flex flex-col laptop:flex-row gap-3 items-center laptop:px-4">
          <h2 className='laptop:hidden'>សន្សំ ៧០% លើវគ្គសិក្សាឥឡូវនេះ :</h2>
          <div className="flex flex-row laptop:flex-col gap-2 laptop:gap-0 items-center laptop:items-start laptop:justify-center pr-5 laptop:pt-2">
            <p className="text-gray-400 line-through text-lg laptop:text-base">{data.pricing.originalPrice}</p>
            <p className="text-3xl laptop:text-2xl font-medium">{data.pricing.currentPrice}</p>
          </div>
          <button className="w-[90%] rounded-sm text-white text-base tablet:text-lg py-3 font-medium bg-primary hover:bg-primary-hover transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 mt-2">
            បន្ថែមចូលកន្ត្រក <RightArrow size={12}/>
          </button>
        </div>

        <hr className='h-[1px] border-none bg-gray-300 mt-6 laptop:mt-4 w-[85%] mx-auto'></hr>

        <div className='flex flex-col gap-5 laptop:gap-3 mt-6 laptop:mt-4 px-[5%] text-base'>
          <div className="flex items-start">
            <ComputerIcon className='text-primary w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ប្រភេទ: </span>
            <span>{data.courseDetails.type}</span>
          </div>

          <div className="flex items-start">
            <ClockIcon className='text-primary  w-[24px] laptop:w-[16px]' />
            <span className="ml-6 font-semibold laptop:font-medium w-30">រយៈពេល: </span>
            <span>{data.courseDetails.duration}</span>
          </div>

          <div className="flex items-start">
            <StarIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ទទួលបាន: </span>
            <span>{data.courseDetails.award}</span>
          </div>

          <div className="flex items-start">
            <GlobalIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ភាសា: </span>
            <span>{data.courseDetails.language}</span>
          </div>

          <div className="flex items-start">
            <LevelIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">កម្រិត: </span>
            <span>{data.courseDetails.level}</span>
          </div>

          <div className="flex items-start">
            <GroupIcon className='text-primary  w-[24px] laptop:w-[16px]'/>
            <span className="ml-6 font-semibold laptop:font-medium w-30">ការប្រើប្រាស់: </span>
            <span>{data.courseDetails.access}</span>
          </div>

          <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

          <div className="flex flex-col laptop:flex-row items-center gap-6 mt-2">
            <img src='https://www.ibm-institute.com/wp-content/uploads/2019/05/career-150x150.png' alt='icon' className='w-[100px] laptop:w-[60px]'/>
            <p>{data.programInfo.text}<a href="#" className="mx-1 text-primary underline">{data.programInfo.programName}</a>កម្មវិធីសិក្សា</p>
          </div>
        </div>
      </div>

      <div className='col-start-1 col-end-2 row-span-1 laptop:row-start-2 laptop:row-end-3 mt-2'>
        <h2 className="text-lg laptop:text-2xl font-medium text-black">ជំនាញដែលអ្នកនឹងសិក្សា</h2>
        <div className='flex flex-col gap-2 mt-4'>
          {data.skills.map((skill, index) => (
            <div key={index} className="flex gap-1 text-base">
              <Tick className='text-primary' size={24}/>
              <span>{skill}</span>
            </div>
          ))}
        </div>

        <div className="mt-10  laptop:mt-10">
          <h2 className="text-lg laptop:text-2xl font-medium text-black">អំពីវគ្គសិក្សានេះ</h2>
          <div className="text-base flex flex-col gap-4 leading-relaxed mt-4">
            <p>{data.aboutCourse.main}</p>
            <p>{data.aboutCourse.details}</p>
            <p>{data.aboutCourse.caseStudy}</p>
          </div>
        </div>
      </div>

      <hr className='col-span-full h-[1px] border-none bg-gray-300 mt-12 w-[90%] mx-auto'></hr>
    </div>
  );
};

export default CourseDescription;