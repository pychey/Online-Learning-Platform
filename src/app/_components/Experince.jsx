'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StarRating from '@/components/icons/StarRating';
import axios from 'axios';


const Experience = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get('/api/home/review')
        setReviews(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchReviews()
  }, [])

  if (!reviews.length) return ( <p>Loading...</p> )

  return (
    <div className="w-full px-6 py-8 flex flex-col items-center gap-10 my-15 bg-[#F2F2F2]">
      <h1 className='font-medium text-xl tablet:text-2xl laptop:text-4xl leading-[2rem] text-center'>
        បទពិសោធន៍អ្នកដែលបានរៀនជាមួយ <span className='text-primary'>សាស្ត្រាអាខាដាមី</span>
      </h1>

      <Swiper
      modules={[Autoplay, Pagination, Navigation, Grid]}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid:{ rows: 3, fill: 'row' },
            slidesPerGroup: 1
          },
          548: {
            slidesPerView: 2,
            grid:{ rows: 1 },
            slidesPerGroup: 2  
          },
          849: {
            slidesPerView: 3,
            grid:{ rows: 1 },
            slidesPerGroup: 3  
          },
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        className="w-full max-w-[1200px] mx-auto custom-experience-swiper"
      >
        {reviews.map((review, slideIndex) => (
          <SwiperSlide key={slideIndex}>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={review.reviewer_img}
                  alt={`Profile of ${review.name}`}
                  className="w-[150px] h-[150px] object-cover rounded-full"
                />
                <StarRating ratingNumber={false} rating={review.rating} className='mt-3 flex text-xl gap-1 select-none' color='text-primary' outlineColor='#652d91'/>
                <div className="w-60 text-center text-lg mt-2">
                  <p>{review.name}</p>
                  <p>{review.generation}</p>
                  <p>{review.course_name}</p>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .custom-experience-swiper {
          padding-bottom: 50px;
        }
        .custom-experience-swiper .swiper-button-prev::after,
        .custom-experience-swiper .swiper-button-next::after {
          color: #652d91;
          font-size:24px;
        }
        .custom-experience-swiper .swiper-button-prev {
          left: 3% !important;
        }
        .custom-experience-swiper .swiper-button-next {
          right: 3% !important;
        }
        .custom-experience-swiper .swiper-pagination {
          bottom: 0px;
        }
        .custom-experience-swiper .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          border: 2px solid #652d91;
          background: transparent;
          border-radius: 50%;
          margin-inline: 4px !important;
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .custom-experience-swiper .swiper-pagination-bullet-active {
          background: #652d91 !important;
          opacity: 1;
        }
        @media (max-width: 849px) {
          .custom-experience-swiper {
            padding-bottom: 0px;
          }
          .custom-experience-swiper .swiper-pagination {
            display: none;
          }
        }
        @media (max-width: 548px) {
          .custom-experience-swiper {
            padding-bottom: 0px;
          }
          .custom-experience-swiper .swiper-pagination {
            display: none;
          }
          .custom-experience-swiper .swiper-button-prev,
          .custom-experience-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Experience;