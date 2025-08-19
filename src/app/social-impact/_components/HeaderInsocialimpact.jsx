import React from "react";

const HeaderInsocialimpact = () => {
  return (
    <section className="py-2 h-auto lg:h-[178px] flex justify-center items-center  bg-white mt-20">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-start  px-4 sm:px-10 justify-between">
         <div className="md:w-130 w-full ml-1">
          <h1 className="text-start lg:text-3xl md:text-xl sm:text-lg font-semibold">Education For Good</h1>
          <h2 className="text-start lg:text-3xl  md:text-xl sm:text-lg font-medium">Partnerships & Aid Projects

</h2>
        </div>
        {/* Left Image */}
        <div className=" md:w-[273px]  lg:mt-0 ml-0 lg:ml-[39.5%] md:ml-[30%]">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/06/socialimpactlogo-273x75.png"
            alt="Contentmap"
            className=" object-fit-contain w-[273px] h-[75px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderInsocialimpact;
