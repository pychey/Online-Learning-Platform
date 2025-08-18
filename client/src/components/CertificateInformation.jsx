import React from "react";

const certificates = [
  {
    img: "https://www.ibm-institute.com/wp-content/uploads/2021/06/coursecertexample.png", // replace with real certificate image
    title: "Course Certificates",
    description:
      "You will be able to download your personal course certificate for every course you complete.",
    button: "BUSINESS COURSES >",
  },
  {
    img: "https://www.ibm-institute.com/wp-content/uploads/2021/06/programcertexample.png",
    title: "Program Certificates ",
    description:
      "You will receive a free program certificate if you complete all required courses in a specific field.",
    button: "BROWSE PROGRAMS >",
  },
  {
    img: "https://www.ibm-institute.com/wp-content/uploads/2021/06/programcertexample.png",
    title: "Language Certificates",
    description:
      "You will receive a personal language certificate after taking one of our popular 45-minute tests.",
    button: "LANGUAGE TESTS >",
  },
];

const CertificateInformation = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 h-[460px] ">
        {certificates.map((item, idx) => (
          <div
            key={idx}
            className="bg-white  shadow-md  flex flex-col items-center text-center hover:shadow-lg transition duration-300 border-1 border-gray-400 px-4 pb-7"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-fit-contain mt-4 mb-4 "
            />
            <h3 className="text-lg font-semibold mb-6">{item.title}</h3>
            <p className="text-gray-600 mb-6 text-base">{item.description}</p>
            <button className="px-6 py-2 border-2 border-primary text-primary font-medium hover:bg-primary-hover transition hover:text-white ">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateInformation;
