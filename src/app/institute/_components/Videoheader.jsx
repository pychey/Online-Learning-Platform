'use client'

import React, { useState } from 'react';
import PlayIcon from '@/components/icons/Playicon';

const VideoHeader = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="relative w-full h-[381px] bg-gray-300 flex flex-col items-center justify-center overflow-hidden pb-[30px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80")',
          }}
        />

        <div className="relative z-10 text-white text-center mt-4">
          <h1 className="text-3xl font-semibold">
            High-quality education for everyone, everywhere
          </h1>
          <p className="text-xl mt-6">
            Start your online learning experience today
          </p>
        </div>

        <div className="relative flex justify-center mt-16 z-10">
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center justify-center aspect-square min-h-[75px] border-4 border-white rounded-full bg-transparent hover:border-transparent hover:bg-primary transition-colors duration-300 cursor-pointer"
          >
            <PlayIcon size={50} color={"#FFFFFF"} />
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-brightness-25  flex items-center  justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video ml-6 mr-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-1 right-0 text-[#C5C5C5] text-5xl font-normal"
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
