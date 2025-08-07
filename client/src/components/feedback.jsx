const Feedback = () => {
  return (
    
    <section className="bg-white text-center py-12 px-4">
          
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black font-['Lato'] mb-9">
        ចាប់ផ្តើមទទួលយកនូវបទពិសោធន៍ការរៀនអនឡាញថ្ងៃនេះ
      </h2>
    
      <div className="flex flex-wrap justify-evenly flex-row">
       
        <div className="w-full sm:w-1/3 flex flex-col items-center mb-7">
          <p className="text-5xl text-blue-500 font-bold pb-3">១០០%</p>
          <p className="text-xl text-black">រៀនអនឡានដោយខ្លួនឯង។</p>
        </div>

       
        <div className="w-full sm:w-1/3 flex flex-col items-center mb-7">
          <p className="text-5xl text-blue-500 font-bold pb-3">១០០%</p>
          <p className="text-xl text-black">
            ទទួលស្គាល់ដោយស្ថាប័នរដ្ឋនិងឯកជន
          </p>
        </div>

 
        <div className="w-full sm:w-1/3 flex flex-col items-center mb-7">
          <p className="text-5xl text-blue-500 font-bold pb-3">៩៧%</p>
          <p className="text-xl text-black">អ្នកចូលរៀនមានភាពពេញចិត្ត</p>
        </div>
      </div>


      <div className="mt-5">
        <button className="bg-blue-500 text-white font-semibold px-6 py-3  hover:bg-blue-600 rounded-full transition cursor-pointer ">
          ចូលរៀនឥឡូវនេះ
        </button>
      </div>
    </section> 
  );
};

export default Feedback;
