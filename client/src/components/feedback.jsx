const Feedback = () => {
  return (
    
    <section className="bg-white text-center py-12 px-4">
          
      <h2 className="text-xl tablet:text-2xl laptop:text-3xl font-semibold text-black mb-9">
        ចាប់ផ្តើមទទួលយកនូវបទពិសោធន៍ការរៀនអនឡាញថ្ងៃនេះ
      </h2>                         
    
      <div className="flex flex-wrap justify-evenly flex-row text-4xl text-primary font-semibold">
       
        <div className="w-full min-tablet:w-1/3 flex flex-col items-center mb-7">
          <p className="pb-3">១០០%</p>
          <p className="font-medium text-lg text-black">រៀនអនឡានដោយខ្លួនឯង</p>
        </div>

       
        <div className="w-full min-tablet:w-1/3 flex flex-col items-center mb-7">
          <p className="pb-3">១០០%</p>
          <p className="font-medium text-lg text-black">
            ទទួលស្គាល់ដោយស្ថាប័នរដ្ឋនិងឯកជន
          </p>
        </div>

 
        <div className="w-full min-tablet:w-1/3 flex flex-col items-center mb-7">
          <p className="pb-3">៩៧%</p>
          <p className="font-medium text-lg text-black">អ្នកចូលរៀនមានភាពពេញចិត្ត</p>
        </div>
      </div>


      <div className="mt-5">
        <button className="bg-primary text-white font-semibold px-6 py-3  hover:bg-primary-hover rounded-full transition cursor-pointer ">
        
          ចូលរៀនឥឡូវនេះ
        </button>
      </div>
    </section> 
  );
};

export default Feedback;
