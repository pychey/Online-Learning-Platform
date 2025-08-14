import BookIcon from "./icons/Book";

const ProgramOverview = ({ data }) => {

  return (
    <div className="mt-20 grid grid-cols-1 gap-6">
        <main className="col-span-1 flex flex-col gap-6 p-4">
            <figure className="flex flex-col gap-2">
                <img src={data.programIcon} className="w-[92px]"/>
                <figcaption>
                    <h1>{data.programTitle}</h1>
                    <h1>{data.certificateTitle}</h1>
                </figcaption>
            </figure>
            <hr className='h-[1px] border-none bg-gray-300 w-[90%] mx-auto'></hr>
            <section className="flex flex-col gap-2">
                <h2>អំពីកម្មវិធីសិក្សា</h2>
                <p>{data.about}</p>
            </section>
            <section className="flex flex-col gap-2">
                <h2>{data.programTitle}នេះធ្វើឡើងសម្រាប់ :</h2>
                <ul className='flex flex-col gap-2'>
                    {data.designedFor.map((purpose, index) => (
                        <li key={index} className="flex gap-1.5">
                            <p>&#9632;</p> 
                            <p>{purpose}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
        <aside>
            <img src={data.certificateProgram} alt='Program Certificate'/>
            <div className='flex flex-col gap-5 laptop:gap-3 mt-6 laptop:mt-4 px-[5%] text-base'>
                <div className="flex items-start">
                    <BookIcon className='text-primary w-[20px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

                <div className="flex items-start">
                    <BookIcon className='text-primary w-[20px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

                <div className="flex items-start">
                    <BookIcon className='text-primary w-[20px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

                <div className="flex items-start">
                    <BookIcon className='text-primary w-[20px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[90%] mx-auto'></hr>

                <div className="flex items-start">
                    <BookIcon className='text-primary w-[20px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 mt-2 w-[100%] mx-auto'></hr>
            </div>
        </aside>
    </div>
  );
};

export default ProgramOverview;