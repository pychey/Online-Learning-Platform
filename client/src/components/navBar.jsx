import {useState} from 'react'
import { FaBasketShopping,FaUser,FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {

  const page={
    home:"/",
    cart : "/cart",
    login : "/my-account-settings",
  }

  const nav = [
    { title: "គេហទំព័រ", link: "/" },
    {
      title: "វគ្គបណ្តុះបណ្តាល",link:"/courselist",
      submenu: [
        { title: "អត់1", link: "/" },
        { title: "អត់2", link: "/" },
        { title: "អត់3", link: "/" }
      ]
    },
    { title: "ស្ថាប័ន", link: "/" ,
      submenu: [
        { title: "អត់4", link: "/" },
        { title: "អត់5", link: "/" },
        { title: "អត់6", link: "/" }
      ]
    },
  ];

  const [openMenu,setOpenMenu]=useState(false)

  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null)

  const toggleSubmenu = (index) => {
    setActiveSubmenuIndex(prev => prev === index ? null : index)
  }

  const handleMenuClick=()=>{
    setOpenMenu(prev=>!prev)
  }

  return (
    <nav className='w-full h-20 border-gray shadow-md fixed top-0 left-0 right-0 bg-white z-50 transition-transform duration-300 ease-in-out'>
      <div className='flex items-center justify-between max-w-[1100px] mx-auto px-2'>
        <div className="w-[45%] tablet:w-60 h-full ">
          <a className="w-full h-full" href={page.home}><img src="/Logo-AA-Horizontal.png" alt="logo" className="h-full w-full object-cover"/></a>
        </div>
        <div className="hidden laptop:flex items-center justify-end gap-2.5 lg:gap-4 xl:gap-6 py-5 ">
            {nav.map((n, index) => (
            <div key={index} className="relative group">
              <div className="text-gray-800 font-[600] hover:text-primary-color cursor-pointer py-2 px-1 select-none group-hover:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <a href={n.link}>{n.title}</a>
                  {n.submenu && <IoIosArrowDown />}
                </span>
              </div>

            {n.submenu && (
              <div className="absolute left-0 mt-0 hidden group-hover:block flex-col bg-white shadow-xl rounded z-50 min-w-[150px] border border-gray-300">
                
                {/* arrow pointer */}
                <div className="absolute -top-2 left-1/4 -translate-x-1/2">
                  {/* Shadow layer */}
                  <div className="absolute left-0 top-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-400"></div>
                  {/* White triangle on top */}
                  <div className="relative left-0 top-[1px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                </div>

                {n.submenu.map((sub, subIndex) => (
                  <a
                    key={subIndex}
                    href={sub.link}
                    className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-primary whitespace-nowrap block hover:bg-gray-200"
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          ))}
          <a className="h-10 bg-primary px-3.5 py-2 rounded-md text-white" href={page.login}>ចូលរៀន/ចុះឈ្មោះ</a>
          <a className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg"href={page.cart}><FaBasketShopping className='h-5 w-5 text-white'/></a>
        </div>
        <div className="flex laptop:hidden items-center justify-end tablet:gap-6 gap-2 py-5 ">
          <a className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg"href={page.cart}><FaBasketShopping className='h-5 w-5 text-white'/></a>
          <a className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg"href={page.login}><FaUser className='h-5 w-5 text-white'/></a>
          <button className={`h-10 tablet:w-auto w-10 bg-primary flex items-center justify-center rounded-lg`} onClick={handleMenuClick}><span className='flex px-4 items-center justify-center gap-4'><FaBars className='h-5 w-5 text-white'/><p className='text-white tablet:block hidden'>មីនុយ</p></span></button>
        </div>
        {openMenu && (
          <div className="fixed inset-0 bg-white/40 backdrop-blur-[2px] z-40" onClick={handleMenuClick}></div>
        )}

        <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-out ${openMenu ? "translate-x-0" : "translate-x-full"} opacity-90 shadow-lg`}>
            <div className="flex justify-end p-4">
              <button onClick={handleMenuClick} className="text-gray-400 hover:text-primary text-5xl font-bold">
                &times;
              </button>
            </div>
            <div className="flex flex-col ">
              {nav.map((n, index) => (
                <div key={index} className="border-b border-gray-300">
                  <div className="w-full text-left py-4 pl-4 pr-4 font-semibold text-gray-800 flex items-center justify-between">
                  <a href={n.link}>
                    {n.title}
                  </a>
                  <button
                    className=""
                    onClick={() => toggleSubmenu(index)}
                  >
                    {n.submenu && (
                      <IoIosArrowDown className={`transition-transform duration-300 text-primary ${activeSubmenuIndex === index ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  </div>
                  {n.submenu && (
                    <div className={`bg-gray-50 overflow-hidden transform transition-transform duration-1000 ease-out ${activeSubmenuIndex === index?"max-h-40":"max-h-0"}`}>
                      {n.submenu.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.link}
                          className="block py-2 pl-8 text-sm text-gray-600 hover:bg-gray-100"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={page.login} className='bg-primary text-white py-2 px-2 '>ចូលរៀន/ចុះឈ្មោះ</a>
            </div>
        </div>
    </div>
  </nav>
  )
}

export default NavBar;