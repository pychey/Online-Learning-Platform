'use client';

import { useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

const CourseListHeader = ({ data, onCategoryClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(data.categories[0]?.id || null);

  const handleCategorySelection = (categoryId) => {
    setSelected(categoryId);
    setIsActive(false);
    onCategoryClick(categoryId);
  };

  return (
    <section 
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background-cover-white.jpg')" }}
    >
      <div className="mx-auto max-w-[1074px] tablet:px-3 px-4 py-9 flex flex-col items-center">
        <div className="flex flex-col tablet:flex-row items-center justify-between gap-4 w-full">
          <div clawssName="flex justify-between tablet:max-w-[40%] w-full">
            <h1 className="w-fill tablet:text-[28px] tablet:font-[550] text-xl font-semibold">វគ្គសិក្សាអនឡាញ</h1>
            <div className="flex flex-col items-end tablet:hidden text-sm">
              <h1>{data.totalCourses} វគ្គសិក្សា</h1>
              <h1>{data.totalPrograms} កម្មវិធី</h1>
            </div>
          </div>
          <div className="tablet:w-[420px] w-full flex flex-col">
            <button
              onClick={() => setIsActive(prev => !prev)}
              className={`flex items-center px-1.5 w-full h-14 border border-b-0 border-[#E2E2E2] bg-white
                ${isActive ? "bg-[rgba(255,255,255,0.03)] text-purple-950 font-semibold" : "font-medium"} 
                transition-transform duration-300 cursor-pointer`}
            >
              <ArrowUpIcon
                className={` text-primary hover:text-purple-950 transition-transform duration-300 
                ${isActive ? "" : "rotate-180"}`}
                size={32}
              />
              <p className="ml-1.5 text-lg">ប្រភេទវគ្គសិក្សា</p>
            </button>
          </div>
        </div>

        <div className="flex justify-center tablet:justify-between gap-4 w-full">
          <div className="max-w-[40%] tablet:w-full hidden tablet:block"/>
          
          <div className={`grid grid-cols-4 justify-items-center gap-2 tablet:gap-2 tablet:w-[420px] w-full 
                          border-x border-b border-[#E2E2E2] bg-white transition-all duration-300 
                          overflow-hidden ${isActive ? "h-auto p-2" : "h-0"}`}
          >
             {data.categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelection(category.id)}
              className={`flex flex-col items-center justify-center gap-3 text-center max-w-[130px] w-full 
                h-[100px] text-sm ${selected === category.id ? "font-semibold" : "text-[#707070]"} 
                cursor-pointer transition-shadow duration-300
                hover:[box-shadow:rgba(0,0,0,0.15)_0px_2.75px_5.5px_-3.75px,_rgba(0,0,0,0.200)_0px_2.5px_5.5px_0px]`}
            >
                <MenuIcon 
                  size={40} 
                  className={`${selected === category.id ? "text-primary" : ""}`}
                />
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseListHeader;