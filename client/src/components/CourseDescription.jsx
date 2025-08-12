import React, { useState } from "react";
import ClockIcon from"./icons/ClockIcon"; ;
import GroupIcon from "./icons/GroupIcon";
import LevelIcon from "./icons/LevelIcon";
import StarIcon from "./icons/StarIcon";
import GlobalIcon from "./icons/GlobalICon";
import ComputerIcon from "./icons/ComputerIcon";

const getYouTubeId = (input = "") => {
  if (!input) return null;
  // If input looks like a full YouTube URL, try to extract 11-char ID
  const idMatch = input.match(
    /(?:v=|\/)([A-Za-z0-9_-]{11})(?:[?&]|$)|youtu\.be\/([A-Za-z0-9_-]{11})/
  );
  if (idMatch) return idMatch[1] || idMatch[2];
  // Fallback: maybe the user passed the id directly
  return input;
};

const CourseCard = ({
  title = "សិក្សាការគ្រប់គ្រងទីផ្សារ និងការទំនាក់ទំនងអតិថិជន",
  rating = 4.9,
  userCount = "៤.៩ អ្នកប្រើប្រាស់វាយតម្លៃ",
  description = "ការណែនាំអំពីជំនាញសំខាន់បំផុត និងឧបករណ៍ដែលអាចអនុវត្តបានបំផុតនៃការគ្រប់គ្រងទីផ្សារ និងទំនាក់ទំនង។",
  skills = [
    "យល់ពីការយល់ដឹងអំពីទីផ្សារ",
    "ការគ្រប់គ្រងទំនាក់ទំនងអតិថិជនជោគជ័យ",
    "ការវាយតម្លៃយុទ្ធសាស្រ្តទីផ្សារ",
  ],
  aboutCourse = {
    main: "នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនបង្កើត ចែកចាយ និងទំនាក់ទំនងតម្លៃនៃផលិតផលទៅកាន់អតិថិជនរបស់អ្នក និងដើម្បីបង្កើតការគ្រប់គ្រងទំនាក់ទំនងអតិថិជនដ៏រឹងមាំ។",
    details:
      "សំណុំនៃការចូលរួមដែលចាំបាច់សម្រាប់ការគ្រប់គ្រងទីផ្សារប្រកបដោយជោគជ័យរួមមាន ការចាប់យកការយល់ដឹងអំពីទីផ្សារ ការភ្ជាប់ទំនាក់ទំនងជាមួយអតិថិជន ការកសាងម៉ាកយីហោដ៏រឹងមាំ ការរៀបចំការផ្តល់ជូនទីផ្សារ ការផ្តល់ និងទំនាក់ទំនងតម្លៃ ការបង្កើតកំណើនរយៈពេលវែង និងការអភិវឌ្ឍយុទ្ធសាស្រ្ត និងផែនការទីផ្សារ។",
    caseStudy:
      "អ្នកនឹងទទួលបានសិក្សាករណីខ្លីមួយដែលសង្ខេបយ៉ាងខ្លីអំពីចំណុចសំខាន់ៗនៃវគ្គសិក្សានេះ។",
  },
  pricing = { originalPrice: "$50.00", currentPrice: "$14.99" },
  courseDetails = {
    type: "វគ្គសិក្សា អនឡាញ",
    duration: "៣​ ម៉ោង (self-paced)",
    award: "វិញ្ញាបនប័ត្រ",
    language: "ភាសាខ្មែរ",
    translations: "",
    level: "Introductory",
    access: "មួយជីវិត",
  },
  programInfo = { text: "This course is part of the", programName: "Mini-MBA", programType: "program." },
  // Accept either a YouTube URL or the ID. Example: "https://youtu.be/PQUcIbSEBCM" or "PQUcIbSEBCM"
  youtubeInput = "https://youtu.be/PQUcIbSEBCM?si=hDFDeFZjfz8MtmUW",
  // optional thumbnail image (if you have a custom one). If not provided we still show YouTube iframe when playing.
  thumbnailImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(youtubeInput);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) stars.push(<span key={i} className="text-yellow-400">★</span>);
    if (hasHalfStar) stars.push(<span key="half" className="text-yellow-400">★</span>);
    const empties = 5 - Math.ceil(rating);
    for (let i = 0; i < empties; i++) stars.push(<span key={`e${i}`} className="text-gray-300">★</span>);
    return stars;
  };
  

  // Reusable video block (thumbnail + overlay play button). We duplicate this block in two places in DOM but control visibility by Tailwind breakpoints.
  const VideoPreview = ({ className = "" }) => (
    <div className={`relative  rounded-lg overflow-hidden shadow-md ${className}`}>
      {!isPlaying ? (
        <>
          <img src={thumbnailImage} alt="Course preview" className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-14 h-14 bg-white bg-opacity-95 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-shadow shadow-laptop"
              aria-label="Play video"
            >
              {/* simple inline play icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="#374151" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );

  // Course details component for reusability
  const CourseDetailsSection = ({ className = "" }) => (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-start gap-3">
        <ComputerIcon  size={50}  />
        <div>
          <span className="font-semibold text-gray-900">Type: </span>
          <span className="text-gray-700">{courseDetails.type}</span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <ClockIcon size={20}  />
        <div>
          <span className="font-semibold text-gray-900">រយៈពេលសិក្សា: </span>
          <span className="text-gray-700">{courseDetails.duration}</span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <StarIcon  size={20} />
        <div>
          <span className="font-semibold text-gray-900">រង្វាន់: </span>
          <span className="text-gray-700">{courseDetails.award}</span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <GlobalIcon size={20} />
        <div>
          <span className="font-semibold text-gray-900">ភាសា: </span>
          <span className="text-gray-700">
            {courseDetails.language}

          </span>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <GroupIcon size={20} />
        <div>
          <span className="font-semibold text-gray-900">Level: </span>
          <span className="text-gray-700">{courseDetails.level}</span>
        </div>
      </div>

      <div className="flex items-start gap-3 ">
        <LevelIcon/>
        <div>
          <span className="font-semibold text-gray-900">Access: </span>
          <span className="text-gray-700">{courseDetails.access}</span>
        </div>
      </div>

      {/* Program Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-laptop border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-laptop flex items-center justify-center flex-shrink-0">
            {/* <BookOpen className="w-4 h-4 text-white" /> */}
          </div>
          <div className="text-sm text-gray-700">
            {programInfo.text}{" "}
            <a href="#" className="text-blue-600 hover:underline font-semibold">{programInfo.programName}</a>{" "}
            {programInfo.programType}
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="max-w-6xl mx-auto bg-white rounded-laptop shadow-laptop overflow-hidden">
      {/* layout: mobile -> column, laptop+ -> row */}
      <div className="flex flex-col laptop:flex-row gap-6">
        {/* LEFT: Title, rating, description, (mobile video), skills, about */}
        <div className="flex-1 p-8">
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
            <div className="flex items-center gap-3">
              <div className="flex">{renderStars(rating)}</div>
              <span className="text-gray-600">({userCount})</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-laptop mb-4 leading-relaxed">{description}</p>

          {/* MOBILE: show video right under description (only on small screens) */}
          <div className="block laptop:hidden mb-6">
            <VideoPreview />
            
            {/* Pricing / Buy button for mobile */}
            <div className="mt-4 mb-4 ">
              <div className="flex items-baseline gap-2 mb-4 flex-col">
                <span className="text-gray-400 line-through text-base">{pricing.originalPrice}</span>
                <span className="text-xl font-bold text-gray-900">{pricing.currentPrice}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-laptop font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                ADD TO CART
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-laptop">
              <CourseDetailsSection />
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills you will learn</h2>
            <div className="space-y-3">
              {skills.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-laptop">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this course</h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>{aboutCourse.main}</p>
              <p>{aboutCourse.details}</p>
              <p>{aboutCourse.caseStudy}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: (desktop video + purchase/details). On mobile this column stacks below left content. */}
        <aside className="w-full laptop:w-96 bg-gray-50 p-6">
          {/* DESKTOP: show video here only on laptop+ */}
          <div className="hidden laptop:block mb-6">
            <VideoPreview />
          </div>

          {/* Pricing / Buy button
          <div className="hidden laptop:block laptop:flex laptop:flex-row">
            <div className="flex items-baseline gap-2 mb-4 flex-col">
              <span className="text-gray-400 line-through text-base">{pricing.originalPrice}</span>
              <span className="text-xl font-bold text-gray-900">{pricing.currentPrice}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-laptop font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              ADD TO CART
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Course Details */}
          {/* <div className="hidden laptop:block">
            <CourseDetailsSection className="space-y-3" />
          </div> */}
          {/* Pricing / Buy button */}
            <div className="hidden laptop:flex laptop:items-center laptop:justify-between">
            {/* Pricing Details */}
            <div className="flex flex-col ml-6 mr-4">
                <span className="text-gray-400 line-through text-base">{pricing.originalPrice}</span>
                <span className="text-xl font-bold text-gray-900">{pricing.currentPrice}</span>
            </div>
            
            {/* Add to Cart Button */}
            <button className="bg-blue-600 w-full  text-white py-3 px-6 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                ADD TO CART
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="ro und" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </div>

            {/* Course Details */}
            <div className="hidden laptop:block">
            <CourseDetailsSection className="space-y-3" />
            </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseCard;
