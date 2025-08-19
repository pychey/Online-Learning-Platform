import React from 'react';

const OtherProgramCertificate = () => {
  const content = [
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/strategy-1-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/career-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/career-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/strategy-1-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/07/goal-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/07/goal-100x100.png',
      title: 'ផ្នែកគ្រប់គ្រង',
      courses: '៤',
      link: '#',
    },
  ];

  return (
    <div className="flex flex-col gap-11 my-15 mx-auto max-w-[1080px] px-4 w-full">
      <h3 className='text-center text-lg tablet:text-xl laptop:text-2xl font-medium'>សញ្ញាបត្រកម្មវិធីសិក្សាផ្សេងៗ</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-6 gap-10">
        {content.map((program, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img src={program.icon} alt={program.title} className="w-20 h-20" />
            <h4 className="mt-2 text-lg font-medium text-center max-w-40 leading-relaxed">
              {program.title}
            </h4>
            <p className="text-sm text-center flex flex-wrap justify-center gap-0 leading-7">
              {program.courses} វគ្គសិក្សា &middot;
              <a href={program.link} className="ml-1 text-primary underline">
                អានបន្ថែម
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProgramCertificate;