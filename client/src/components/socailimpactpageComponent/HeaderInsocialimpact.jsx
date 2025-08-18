import React from "react";

const HeaderInsocialimpact = () => {
  return (
    <section className="py-2 h-auto lg:h-[360px] flex justify-center items-center mt-23">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
         <div>
          <p className="text-black mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px] mt-0 lg:mt-10 ">
          We believe a better world is possible through better education. Learning opportunities can open the door to jobs, resources, and skills that a person needs to not just survive, but thrive. Education is one of the most powerful vehicles for sustainable development – by fighting global poverty, inequality, and vulnerability. Therefore IBMI supports education projects in Cameroon, Uganda, Ghana, Kenya, Laos, and the Philippines.
          </p>
        </div>
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2025/06/socialmap3.png"
            alt="Contentmap"
            className=" object-fit-contain h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderInsocialimpact;
