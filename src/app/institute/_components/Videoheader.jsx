'use client'

import React, { useState } from 'react';
import PlayIcon from '@/components/icons/Playicon';

const VideoHeader = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="relative w-full h-[300px] tablet:h-[381px] bg-gray-300 flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url("https://static.vecteezy.com/system/resources/previews/006/831/704/large_2x/panoramic-banner-of-business-partner-meeting-in-success-concept-businessman-corporate-teamwork-with-professional-team-partnership-celebration-greeting-with-a-work-deal-free-photo.jpg")`
          }}
        />

        <div className="z-10 text-white text-center">
          <h1 className="text-xl tablet:text-3xl font-medium">
            ការអប់រំមានគុណភាពខ្ពស់ សម្រាប់មនុស្សគ្រប់គ្នា នៅគ្រប់ទីកន្លែង
          </h1>
          <p className="text-base tablet:text-xl mt-5">
            ចាប់ផ្តើមបទពិសោធន៍សិក្សាអនឡាញរបស់អ្នកថ្ងៃនេះ
          </p>
        </div>

        <button
          onClick={() => setShowVideo(true)}
          className="mt-10 z-10 flex items-center justify-center aspect-square h-[75px] border-2 border-white rounded-full bg-transparent hover:border-transparent hover:bg-primary transition-colors duration-300 cursor-pointer"
        >
          <PlayIcon size={50} color={"#FFFFFF"} />
        </button>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-25 flex items-center justify-center z-50">
          <div className="w-full max-w-4xl aspect-video ml-6 mr-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zfMH_JTMVMs?si=dJOisdJbOXqBGwCY&autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-0 right-0 text-[#C5C5C5] text-5xl font-normal cursor-pointer"
              aria-label="Close video popup"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoHeader;
