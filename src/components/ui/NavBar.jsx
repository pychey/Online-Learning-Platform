'use client'

import { useState } from 'react';
import { useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext"; 
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";

const NavBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdminPage = pathname.startsWith('/admin')
  const { cart } = useCart(); 
  const cartCount = cart.length;

  const page={
    home:"/",
    cart : "/cart",
    login : "/my-courses",
    guide : "/guide"
  }

  const nav = [
    { title: "គេហទំព័រ", link: "/" },
    {
      title: "វគ្គបណ្តុះបណ្តាល", link: "/courselist",
      submenu: [
        { title: "អត់1", link: "/" },
        { title: "អត់2", link: "/" },
        { title: "អត់3", link: "/" }
      ]
    },
    {
      title: "ស្ថាប័ន", link: "/institute",
      submenu: [
        { title: "អំពីយើង", link: "/institute" },
        { title: "បញ្ជាក់សញ្ញាបត្រ", link: "/verify" },
        { title: "សកម្មភាពក្នុងសង្គម", link: "/social-impact" }
      ]
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveSubmenuIndex(prev => prev === index ? null : index);
  };

  const handleMenuClick = () => {
    setOpenMenu(prev => !prev);
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
    setActiveSubmenuIndex(null);
  };

  if (isAdminPage) return null;

  return (
    <nav className='w-full h-20 border-gray shadow-md fixed top-0 left-0 right-0 bg-white z-50'>
      <div className='flex items-center justify-between max-w-[1100px] mx-auto px-6 tablet:px-2'>
        
        
        <div className="w-[45%] tablet:w-60 h-full ">
          <Link href='/'><img src='/Logo-AA-Horizontal.png' alt="logo" className="h-full w-full object-cover"/></Link>
        </div>

      
        <div className="hidden laptop:flex items-center justify-end gap-2.5 lg:gap-4 xl:gap-6 py-5 ">
          {nav.map((n, index) => (
            <div key={index} className="relative group">
              <div className="text-gray-800 font-[600] hover:text-primary-color cursor-pointer py-2 px-1 select-none group-hover:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <Link href={n.link}>{n.title}</Link>
                  {n.submenu && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                    </svg>
                  )}
                </span>
              </div>

              {n.submenu && (
                <div className="absolute left-0 mt-0 hidden group-hover:block flex-col bg-white shadow-xl rounded z-50 min-w-[150px] border border-gray-300">
                  
                  <div className="absolute -top-2 left-1/4 -translate-x-1/2">
                    <div className="absolute left-0 top-0 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-400"></div>
                    <div className="relative left-0 top-[1px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                  </div>

                  {n.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.link}
                      className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-primary whitespace-nowrap block hover:bg-gray-200"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className="h-10 bg-primary px-3.5 py-2 rounded-md text-white" href={page.login}>{session?.user ? 'គណនីរបស់ខ្ញុំ' : 'ចូលរៀន/ចុះឈ្មោះ'}</Link>
          <a className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg"href={page.cart}>
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.9">
              <path d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z" />
            </svg>
          </a>

      
          <a className="h-10 bg-primary px-3.5 py-2 rounded-md text-white" href={page.login}>
            ចូលរៀន/ចុះឈ្មោះ
          </a>

          {/* lek ler add to cart */}
          <div className="relative">
            <a className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href={page.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z" />
              </svg>
            </a>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-300 text-primary text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {englishToKhmerNumber(cartCount)}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="laptop:hidden flex items-center">
          <button onClick={handleMenuClick} className="p-2 text-gray-800">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="laptop:hidden bg-white shadow-md px-6 py-4">
          {nav.map((n, index) => (
            <div key={index} className="mb-2">
              <div
                onClick={() => toggleSubmenu(index)}
                className="flex justify-between items-center py-2 cursor-pointer text-gray-800 font-semibold"
              >
                <Link href={n.link} onClick={handleLinkClick}>{n.title}</Link>
                {n.submenu && <span>{activeSubmenuIndex === index ? "▲" : "▼"}</span>}
              </div>
              {n.submenu && activeSubmenuIndex === index && (
                <div className="ml-4">
                  {n.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.link}
                      className="block py-1 text-sm text-gray-500 hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href={page.login} className="block bg-primary text-white py-2 px-4 rounded-md mt-3 text-center">
            ចូលរៀន/ចុះឈ្មោះ
          </Link>

          {/*Mobile  */}
          <div className="relative mt-4">
            <Link href={page.cart} className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z" />
              </svg>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {englishToKhmerNumber(cartCount)}
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
