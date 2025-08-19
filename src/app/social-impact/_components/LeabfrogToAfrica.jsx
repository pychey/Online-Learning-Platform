import React from "react";

const LeabfrogToAfrica = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
        
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-4">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/05/Leapfrog2.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8  leading-normal lg:leading-[31px] mt-3">
           Leapfrog e.V.  <a className="text-[#808080]">/ Africa
            </a> 
           
          </h2>
          <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           The digital divides are a social issue – referring to the different access to information and communication technologies between North and South, men and women, rural and urban, and young and old
          </p>
          <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           In close collaboration with its local partner organisations in Africa, <strong> Leapfrog e.V.
            </strong> contributes to closing the digital divides in Kenya, Cameroon, Uganda, and Ghana.{" "}
            <a href="#" className="text-primary underline">
              you can find more information and support the project here
            </a>
          
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeabfrogToAfrica;
