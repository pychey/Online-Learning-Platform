'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { englishToKhmerNumber } from '@/lib/englishToKhmerNumber';
import Link from 'next/link';

const CourseOverview = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('/api/home/course-overview')
        setCourses(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCourses()
  }, [])

  if (!courses.length) return ( <p>Loading...</p> )
  
  return (
    <div className="w-full flex flex-col items-center gap-5 py-10 bg-white mt-4">
      <div className='flex flex-col items-center gap-5 text-xs tablet:text-sm laptop:text-lg px-10 tablet:px-20 text-center'>
        <h1 className='font-bold text-base tablet:text-xl laptop:text-2xl'>យល់ច្បាស់អំពីការវិភាគស្ថិតិ និងការស្រាវជ្រាវ</h1>
        <h2 className='font-normal tracking-[0.3px]'>ជ្រើសរើសវគ្គរៀនបណ្ដុះបណ្តាលអនឡាញខ្លី ចំនួន{englishToKhmerNumber(courses.length)}វគ្គ និងទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការសិក្សា</h2>
      </div>
      <div className="max-w-[400px] tablet:max-w-[700px] laptop:max-w-[1280px] w-full px-10 mt-5">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, Grid]} 
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              grid:{ rows: 4, fill: 'row' },
              slidesPerGroup: 1,
              spaceBetween: 30
            },
            548: {
              slidesPerView: 2,
              grid:{ rows: 2, fill: 'row' },
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            849: {
              slidesPerView: 4,
              grid: { rows: 1 },
              slidesPerGroup: 4,
              spaceBetween: 40
            }
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className='custom-courses-swiper'
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col border border-gray-300 text-xs laptop:text-[13px] w-full">
                <Link href={`/product/${course.slug}`}><img src={course.img_url} alt={course.slug} className='w-full h-[150px] object-cover' /></Link>
                <div className="flex flex-col gap-2 p-2">
                  <h2 className='font-bold'>{course.title}</h2>
                  <h4>| <span className="ml-1">ទទួលបានសញ្ញាបត្រ</span></h4>
                  <h4>| <span className="ml-1">រៀនរយៈពេល {course.duration}</span></h4>
                  <h4>| <span className="ml-1">អនឡាញ {course.online_percent}</span></h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='px-20 tablet:px-40'>
        <button className='bg-primary px-5 py-3 tablet:px-8 text-wrap text-xs tablet:text-sm laptop:text-[16px] mt-2 text-white font-medium rounded-3xl hover:bg-primary-hover cursor-pointer' onClick={() => router.push('/courselist')}>
          បង្ហាញអំពីវគ្គបណ្តុះបណ្តាលទាំងអស់
        </button>
      </div>

      <style>{`
        .custom-courses-swiper {
          padding-inline: 40px;
          padding-bottom: 50px;
        }
        .custom-courses-swiper .swiper-button-prev::after,
        .custom-courses-swiper .swiper-button-next::after {
          color: #652d91;
          font-size:24px;
        }
        .custom-courses-swiper .swiper-button-prev {
          left: -7px !important;
        }
        .custom-courses-swiper .swiper-button-next {
          right: -7px !important;
        }
        .custom-courses-swiper .swiper-pagination {
          bottom: 0px;
        }
        .custom-courses-swiper .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          border: 2px solid #652d91;
          background: transparent;
          border-radius: 50%;
          margin-inline: 4px !important;
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .custom-courses-swiper .swiper-pagination-bullet-active {
          background: #652d91 !important;
          opacity: 1;
        }
        @media (max-width: 849px) {
          .custom-courses-swiper {
            padding-inline: 0px;
            padding-bottom: 0px;
          }
          .custom-courses-swiper .swiper-pagination {
            display: none;
          }
          .custom-courses-swiper .swiper-button-prev,
          .custom-courses-swiper .swiper-button-next {
            display: none;
          }
        }
        @media (max-width: 548px) {
          .custom-courses-swiper {
            padding-inline: 0px;
            padding-bottom: 0px;
          }
          .custom-courses-swiper .swiper-pagination {
            display: none;
          }
          .custom-courses-swiper .swiper-button-prev,
          .custom-courses-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseOverview;
