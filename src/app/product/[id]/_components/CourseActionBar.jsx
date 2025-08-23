import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

const COURSE_ACTION_CONTENT = {
  leftButton: {
    label: "មើលវគ្គទាំងអស់", 
  },
  pricing: {
    original: "$50.00",
    discounted: "$14.99",
    note: "បញ្ចុះតម្លៃ 70% សម្រាប់វគ្គនេះឥឡូវនេះ៖", 
  },
  rightButton: {
    label: "បញ្ចូលទៅក្នុងកន្ត្រក", 
  },
};

const CourseActionBar = () => {
  return (
    <section className="mx-auto px-4 w-full max-w-[1080px]">
      <div className="py-12 w-full border-y border-y-gray-300">
        <div className="flex flex-col laptop:flex-row gap-12 laptop:gap-8 items-center py-2 w-full">
          <button
            className="flex gap-1 justify-center items-center w-full laptop:w-[33%] h-12 hover:bg-primary font-semibold text-xl text-primary 
              hover:text-white border-2 border-primary rounded-sm cursor-pointer transition duration-300"
          >
            <ArrowUpIcon className="rotate-[270deg]" />
            <h1>{COURSE_ACTION_CONTENT.leftButton.label}</h1>
          </button>

          <div className="flex-1 grid grid-cols-2 gap-x-2 gap-1 items-end w-full">
            <p className="text-center col-span-2 font-[450] text-lg">
              {COURSE_ACTION_CONTENT.pricing.note}
            </p>
            <p className="mr-2 text-end font-[450] text-lg text-[#999999] line-through">
              {COURSE_ACTION_CONTENT.pricing.original}
            </p>
            <p className="-ml-2 font-medium text-3xl">
              {COURSE_ACTION_CONTENT.pricing.discounted}
            </p>
          </div>

          <button
            className="flex gap-1 justify-center items-center w-full laptop:w-[33%] h-12 bg-primary hover:bg-primary-hover font-semibold text-xl 
              text-white rounded-sm cursor-pointer transition duration-300"
          >
            <h1>{COURSE_ACTION_CONTENT.rightButton.label}</h1>
            <ArrowUpIcon className="rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseActionBar;
