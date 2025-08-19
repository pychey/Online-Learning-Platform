const Connnectedtocommunity = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
        
        {/* Left Image */}
        <div className=" h-auto w-full">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2022/05/team.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 md:mb-4 lg:mb-6">
            Connected to our community
          </h2>
          <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-xl">
            If you wish to connect to IBMI on social media and stay up-to-date
            about our latest news, we invite you to follow our{" "}
            <a href="#" className="text-[#334862] underline">
              Facebook page
            </a>{" "}
            and our{" "}
            <a href="#" className="text-[#334862] underline">
              LinkedIn page
            </a>
            .
          </p>
          <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-xl">
            Do you have any further questions about our online courses or
            institute? Feel free to{" "}
            <a href="#" className="text-[#334862] underline">
              visit our Help Center
            </a>
            , where you can find our FAQ section as well as our contact details.
          </p>

          <button
            href="#"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold rounded transition-colors duration-200 w-[187px] h-[38px]"
          >
            VISIT HELP CENTER
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connnectedtocommunity;
