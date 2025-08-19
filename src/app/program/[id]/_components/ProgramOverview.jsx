import BookIcon from "../../../../components/icons/Book";
import Clock from "../../../../components/icons/Clock";
import LevelIcon from "../../../../components/icons/LevelIcon";
import PriceTag from "../../../../components/icons/PriceTag";
import Unlock from "../../../../components/icons/Unlock";

const ProgramOverview = ({ data }) => {

  return (
    <div className="mt-20 py-5 tablet:py-10 max-w-[1080px] w-full mx-auto grid grid-cols-1 laptop:grid-cols-[2fr_1fr] gap-6 laptop:gap-8">
        <main className="col-span-1 flex flex-col gap-6 tablet:gap-10 p-4">
            <figure className="flex flex-col laptop:flex-row gap-4 laptop:gap-8">
                <img src={data.programIcon} className="w-[92px]"/>
                <figcaption className="flex flex-col gap-2 laptop:gap-3">
                    <h1 className="text-2xl tablet:text-3xl">{data.programTitle}</h1>
                    <h1 className="font-medium text-3xl tablet:text-4xl">{data.certificateTitle}</h1>
                </figcaption>
            </figure>
            <hr className='h-[1px] border-none bg-gray-300 w-full mx-auto'></hr>
            <section className="flex flex-col gap-2 laptop:gap-4">
                <h2 className="font-medium text-lg tablet:text-xl">អំពីកម្មវិធីសិក្សា</h2>
                <p className="leading-relaxed">{data.about}</p>
            </section>
            <section className="flex flex-col gap-2 laptop:gap-4">
                <h2 className="font-medium text-lg tablet:text-xl">{data.programTitle}នេះធ្វើឡើងសម្រាប់:</h2>
                <ul className='flex flex-col gap-2 laptop:gap-0 leading-relaxed'>
                    {data.designedFor.map((purpose, index) => (
                        <li key={index} className="flex gap-1.5">
                            <p className=" pt-0.5 text-sm">&#9632;</p> 
                            <p>{purpose}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
        <aside>
            <img src={data.certificateProgram} alt='Program Certificate' className="border-1 border-primary"/>
            <div className='flex flex-col gap-5 laptop:gap-3 text-base p-6 laptop:px-8 border-1 border-gray-300'> 
                <div className="flex items-start gap-4">
                    <BookIcon className='text-primary w-[18px] pr-[4px]'/>
                    <p>
                        <span className="font-medium w-30">ចំនួនវគ្គសិក្សាដែលត្រូវការ: </span>
                        <span>{data.details.requiredCourses}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 w-full mx-auto'></hr>

                <div className="flex items-start gap-4">
                    <Clock className='text-primary w-[18px]'/>
                    <p>
                        <span className="font-medium w-30">រយៈពេល: </span>
                        <span>{data.details.duration}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 w-full mx-auto'></hr>

                <div className="flex items-start gap-4">
                    <LevelIcon className='text-primary w-[18px]'/>
                    <p>
                        <span className="font-medium w-30">កម្រិតវគ្គសិក្សា: </span>
                        <span>{data.details.level}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 w-full mx-auto'></hr>

                <div className="flex items-start gap-4">
                    <PriceTag className='text-primary w-[18px]'/>
                    <p>
                        <span className="font-medium w-30">តម្លៃ: </span>
                        <span>{data.details.price}</span>
                    </p>
                </div>

                <hr className='h-[1px] border-none bg-gray-300 w-full mx-auto'></hr>

                <div className="flex items-start gap-4 leading-relaxed">
                    <Unlock className='text-primary w-[24px]'/>
                    <p>
                        <span className="font-medium w-30">ដើម្បីទទួលបាន: </span>
                        <span>{data.details.access}</span>
                    </p>
                </div>
            </div>
        </aside>
    </div>
  );
};

export default ProgramOverview;