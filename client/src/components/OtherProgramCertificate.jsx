import react from 'react';

const OtherProgramCertificate = () => {
  const content = [
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/career-100x100.png',
      title: 'Mini-MBA',
      courses: 6,
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/career-100x100.png',
      title: 'Project Management',
      courses: 4,
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/career-100x100.png',
      title: 'Innovation Management',
      courses: 4,
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/05/strategy-1-100x100.png',
      title: 'Strategic Management',
      courses: 4,
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/07/goal-100x100.png',
      title: 'Professional Career Skills',
      courses: 4,
      link: '#',
    },
    {
      icon: 'https://www.ibm-institute.com/wp-content/uploads/2019/07/goal-100x100.png',
      title: 'Global Governance',
      courses: 4,
      link: '#',
    },
  ];

  return (
    <div className="flex flex-col my-20 mx-auto max-w-[80%] w-full">
      <div className="flex justify-center text-2xl items-center font-semibold mb-11 ">
        <h3>Other Programs Certifiacate</h3>
      </div>
      <div className="grid laptop:grid-cols-6 gap-8 tablet:grid-cols-2 grid-cols-1">
        {content.map((program, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img src={program.icon} alt={program.title} className="w-20 h-20" />
            <h4 className="mt-2 font-semibold text-lg text-center w-full max-w-40 h-12 flex items-center justify-center">
              {program.title}
            </h4>
            <p className="text-sm text-center">
              {program.courses} courses •
              <a href={program.link} className="ml-1 text-blue-500 underline">
                Learn more
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProgramCertificate;
