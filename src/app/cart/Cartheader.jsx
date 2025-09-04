import MenuIcon from "@/components/icons/MenuIcon"
// import { MenuIcon,MdKeyboardArrowLeft } from "react-icons/md";

const Cart = () => {
  const nav=[
    {name:"កន្ត្រកអីវ៉ាន់",url:"/"},
    {name:"ព័ត៌មានការទិញ",url:"/"},
    {name:"ការទិញជោគជ័យ",url:"/"},
    {name:"បញ្ចូលវគ្គសិក្សា",url:"/"},
    {name:"ទៅកន្លែងបង់ប្រាក់",url:"/"}
  ]

  return (
    <main className='w-screen mt-20'>
      <div className="block tablet:hidden text-3xl m-auto h-10 w-fit">កន្រ្តកអីវ៉ាន់</div>
      <div className="w-full text-4xl justify-center items-center gap-4 px-2 tablet:flex hidden">
        <a href={nav[0].url} className="flex justify-center items-center gap-4 py-10">
        	<span className='bg-primary text-white px-4 pt-2 rounded-4xl'>
            1
          </span>
          <p>
            {nav[0].name}
          </p>
        </a>
        <p className='text-4xl opacity-20'><MenuIcon /></p>
        <a href={nav[1].url} className="flex justify-center items-center gap-4 py-10">
          <span className='bg-gray-400 text-white px-4 pt-2 rounded-4xl'>
            2
          </span>
          <p className='opacity-20'>
            {nav[1].name}
          </p>
        </a>
        <p className='text-4xl opacity-20'><MenuIcon /></p>
        <a href={nav[2].url} className="flex justify-center items-center gap-4 py-10">
          <span className='bg-gray-400 text-white px-4 pt-2 rounded-4xl'>
            3
          </span>
          <p className='opacity-20'>
            {nav[2].name}
          </p>
        </a>
      </div>
      {/* <div className="flex justify-center items-center pt-8">កន្ត្រករបស់អ្នកគឺទទេរ</div> */}
      {/* <div className="flex justify-center items-center  gap-4 tablet:gap-10 laptop:gap-60  tablet:text-xl pt-20 px-2">
        <a href={nav[3].url} className='flex justify-center items-center border-2 py-2  w-60 text-primary border-primary hover:text-white hover:bg-primary transition-colors duration-300 ease-in-out '><MenuIcon/> {nav[3].name}</a>
        <a href={nav[4].url} className='flex justify-center items-center border-2 py-2 w-60 text-white bg-primary hover:bg-purple-950 transition-colors duration-300 ease-in-out '> {nav[4].name} <MenuIcon/></a>
      </div> */}
    </main>
  )
}

export default Cart