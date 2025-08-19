import React from "react";

const Lutttokenya = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
         <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8 ">
           LUTSS e.V.  <a className="text-[#808080]">/ Kenya
            </a> 
           
          </h2>
          <p className="text-black mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
           The Joy Education Center in Nairobi, Kenya was founded by Joyce Muhonja with other dedicated women from her area. The women want to give the poorer children of Nairobi an easy access to quality education.
          </p>
          <p className="text-black mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           The organization <strong> Living under the Same Sun (LUTSS) e.V.
            </strong> from Berlin helps Joyce and her neighborhood initiative to finance the school. {" "}
            <a href="#" className="text-primary underline">
              You can find more information and support the project here.
            </a>
          
          </p>
        </div>
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/05/Joy.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
      </div>
    </section>
  );
};

export default Lutttokenya;
