import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const CourseOverview = ({ data }) => {

  return (
    <div className="flex flex-col items-center gap-5 py-10 bg-white mt-20">
      <div className='flex flex-col items-center gap-5 text-xs tablet:text-sm laptop:text-lg px-10 tablet:px-20 text-center'>
        <h1 className='font-bold text-base tablet:text-xl laptop:text-2xl'>{data.title}</h1>
        <h2 className='font-normal tracking-[0.3px]'>{data.description}</h2>
      </div>
      <div className="w-full px-10 tablet:px-20 mt-5">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, Grid]}  
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              grid:{ rows: 2, fill: 'row' },
              slidesPerGroup: 2
            },
            849: {
              slidesPerView: 4,
              grid: { rows: 1 },
              slidesPerGroup: 4            
            }
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {data.courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col border border-gray-300 text-xs laptop:text-[13px] w-full">
                <a href='/product/sample'><img src={course.thumbnail} alt={course.title} /></a>
                <div className="flex flex-col gap-2 p-2">
                  <h2 className='font-bold'>{index} {course.title}</h2>
                  <h4>| <span className="ml-1 tablet:ml-3">{course.benefit}</span></h4>
                  <h4>| <span className="ml-1 tablet:ml-3">រៀនរយៈពេល {course.duration} ម៉ោង</span></h4>
                  <h4>| <span className="ml-1 tablet:ml-3">អនឡាញ {course.onlinePercent}</span></h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='px-20 tablet:px-40'>
        <button className='bg-primary px-5 py-3 tablet:px-8 text-wrap text-xs tablet:text-sm laptop:text-[16px] mt-2 text-white font-bold rounded-3xl hover:bg-primary-hover' >
          {data.buttonInfo}
        </button>
      </div>
    </div>
  );
};

export default CourseOverview;
