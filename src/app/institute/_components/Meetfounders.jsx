import React from "react";

const founders = [
  {
    img: "https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg", 
    quote: "Education stands as the most important tool for catalyzing change and innovation.",
    name: "Bastian",
    role: "Director",
    cvLink: "#",
    linkedin: "#",
  },
  {
    img: "https://images.pexels.com/photos/31431922/pexels-photo-31431922.jpeg", 
    quote: "It is time to embrace digitalization and the educational opportunities it presents.",
    name: "Fabian",
    role: "Director",
    cvLink: "#",
    linkedin: "#",
  },
];



export default function MeetFounders() {
  return (
    <section className="bg-[#f2f2f2] min-h-[358px]  w-full  mb-10  ">
      <div className="max-w-1xl mx-auto text-center ">
        {/* Title */}
        <h2 className="text-2xl font-semibold pt-12">Meet the founders</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center  gap-8 mt-13 sm:w-full md:w-full md:flex-nowrap ml-4 mr-4 sm:ml-0 sm:mr-0   ">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="flex bg-white max-w-[513px] h-[167.6px] shadow-sm"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={f.img}
                  alt={f.name}
                  className="sm:w-[168px] sm:h-[168px]  w-[150px] h-[168px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center font-semibold ml-4 sm:ml-8 mr-2 text-left ">
                <p className="italic text-xs sm:text-sm mb-4">
                  “{f.quote}”
                </p>
                <p className="text-xs sm:text-base mt-2">
                  {f.name}, {f.role} |{" "}
                  <a
                    href={f.cvLink}
                    className="text-primary hover:underline"
                  >
                    Full CV
                  </a>{" "}
                  |{" "}
                  <a
                    href={f.linkedin}
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
