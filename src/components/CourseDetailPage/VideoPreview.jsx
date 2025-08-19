'use client'

import { useState } from "react";
import PlayIcon from "../icons/Playicon";

const VideoPreview = ({ thumbnail, youtubeLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='relative w-full'>
      {!isPlaying ? (
        <>
          <img
            src={thumbnail}
            alt="Course Preview"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-24 h-24 border-2 border-white rounded-[50%] flex items-center justify-center hover:bg-primary-hover hover:border-primary-hover transition-colors duration-300 cursor-pointer"
              aria-label="Play Video"
            >
              <PlayIcon size={72} color='#fff'/>
            </button>
          </div>
        </>
      ) : (
        <iframe 
          className='w-full aspect-video'
          src={youtubeLink}
          title="YouTube Video" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen >
        </iframe>
      )}
    </div>
  )
};

export default VideoPreview;