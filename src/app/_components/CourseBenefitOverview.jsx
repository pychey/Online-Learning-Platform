'use client'

import EducationIcon from "@/components/icons/Education";
import Freedom from "@/components/icons/Freedom";
import PlayIcon from "@/components/icons/Playicon";
import SaveTime from "@/components/icons/SaveTime";
import VideoPreview from "@/components/ui/VideoPreview";
import axios from "axios";
import { useEffect, useState } from "react";

const CourseBenefitOverview = () => {
  const [benefits, setBenefits] = useState([])

  useEffect(() => {
    async function fetchBenefits() {
      try {
        const response = await axios.get('/api/home/course-benefit');
        const subHeading = response.data.filter(data => data.type === 'sub_heading');
        const paragraph = response.data.filter(data => data.type === 'paragraph');
        const icon = [ EducationIcon, SaveTime, Freedom ]

        const combined = subHeading.map((heading, idx) => ({
          title: heading.content,
          description: paragraph[idx].content,
          icon: icon[idx]
        }));

        setBenefits(combined);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBenefits();
  }, []);

  if (!benefits.length) return ( <p>Loading...</p> )

  return (
    <section className="px-2 py-10 w-full bg-[#F2F2F2]">
      <div className="flex flex-col tablet:flex-row gap-8 mx-auto px-4 max-w-[1320px]">
        <div className="flex justify-center items-center flex-1">
          <VideoPreview 
            thumbnail='https://res.cloudinary.com/dogwsyf81/image/upload/v1756783946/AA001-IMG_-_4_x_2.5_abvtx1.jpg'
            youtubeLink='https://www.youtube.com/embed/zfMH_JTMVMs?si=dJOisdJbOXqBGwCY&autoplay=1'
            className='max-w-[495px]'
            />
        </div>

        <div className="flex flex-col justify-between gap-6 flex-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div
                className="flex justify-center items-center min-w-[84px] h-[84px] border-2 
                          border-primary rounded-full hover:bg-primary transition-colors 
                          duration-300 text-primary hover:text-white"
              >
                <benefit.icon size={40}/>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{benefit.title}</h2>
                <p className="mt-[3px]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitOverview;