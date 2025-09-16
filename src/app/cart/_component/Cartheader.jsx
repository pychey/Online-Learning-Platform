import RightArrow from "@/components/icons/RightArrow";
import Link from "next/link";

const Cartheader = () => {

  return (
    <main className="w-full">
      <div className="flex items-center justify-center gap-2 laptop:hidden w-full text-xl text-center py-10 px-4">
        <Link href={'/cart'} className="text-primary font-medium">កន្រ្តកអីវ៉ាន់</Link>
        <RightArrow className='opacity-20'/>
        <Link href={'/checkout-detail'} className="font-medium opacity-20">ព័ត៌មានការទិញ</Link>
      </div>
      <div className="w-full text-3xl hidden laptop:flex justify-center items-center gap-4 py-10 px-4">
        <Link href='/cart' className="flex justify-center items-center gap-4">
          <span className="bg-primary text-white flex justify-center items-center w-10 h-10 rounded-[50%]">១</span>
          <p>កន្ត្រកអីវ៉ាន់</p>
        </Link>
        <RightArrow className='opacity-20'/>
        <Link href='/checkout-detail' className="flex justify-center items-center gap-4">
          <span className="bg-gray-400 text-white flex justify-center items-center w-10 h-10 rounded-[50%]">២</span>
          <p className="opacity-20 hover:opacity-100">ព័ត៌មានការទិញ</p>
        </Link>
        <RightArrow className='opacity-20'/>
        <div className="flex justify-center items-center gap-4">
          <span className="bg-gray-400 text-white flex justify-center items-center w-10 h-10 rounded-[50%]">៣</span>
          <p className="opacity-20">ការទិញជោគជ័យ</p>
        </div>
      </div>
    </main>
  );
};

export default Cartheader;
