'use client'

import { useState } from 'react';
import { useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";

const NavBar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAdminPage = pathname.startsWith('/admin');

  const { cart } = useCart();
  const cartCount = cart.length;

  const page = {
    home: "/",
    cart: "/cart",
    login: "/my-courses",
    guide: "/guide"
  };

  const nav = [
    { title: "គេហទំព័រ", link: "/" },
    {
      title: "វគ្គបណ្តុះបណ្តាល", link: "/courselist",
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
      <div className='flex gap-4 items-center justify-between max-w-[1100px] mx-auto px-6 tablet:px-2'>
        
        <div className="w-[45%] tablet:w-60 h-full pb-3">
          <Link className="w-full h-full" href="/">
            <img src="/Sastra.png" alt="logo" className="h-full w-full object-cover" />
          </Link>
        </div>

        <div className="hidden laptop:flex items-center justify-end gap-2.5 lg:gap-4 xl:gap-6 py-5 ">
          {nav.map((n, index) => (
            <div key={index} className="relative group">
              <div className="text-gray-800 font-[600] hover:text-primary-color cursor-pointer py-2 px-1 select-none group-hover:text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <Link href={n.link}>{n.title}</Link>
                  {n.submenu && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24"><path fill="currentColor"
                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" /></svg>
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
                    <Link key={subIndex} href={sub.link}
                      className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-primary whitespace-nowrap block hover:bg-gray-200">
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link className="h-10 bg-primary px-3.5 py-2 rounded-md text-white"
            href={page.login}>
            {session?.user ? 'គណនីរបស់ខ្ញុំ' : 'ចូលរៀន/ចុះឈ្មោះ'}
          </Link>

          <div className="relative">
            <Link className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href={page.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 
                1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 
                1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 
                21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 
                8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 
                .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 
                0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 
                7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 
                20V8z" />
              </svg>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {englishToKhmerNumber(cartCount)}
              </span>
            )}
          </div>

          { session?.user?.isAdmin && (
            <div className="relative">
              <Link className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href='/admin/program'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M18 12h-2.18c-.17.7-.44 1.35-.81 1.93l1.54 1.54l-2.1 2.1l-1.54-1.54c-.58.36-1.23.63-1.91.79V19H8v-2.18c-.68-.16-1.33-.43-1.91-.79l-1.54 1.54l-2.12-2.12l1.54-1.54c-.36-.58-.63-1.23-.79-1.91H1V9.03h2.17c.16-.7.44-1.35.8-1.94L2.43 5.55l2.1-2.1l1.54 1.54c.58-.37 1.24-.64 1.93-.81V2h3v2.18c.68.16 1.33.43 1.91.79l1.54-1.54l2.12 2.12l-1.54 1.54c.36.59.64 1.24.8 1.94H18zm-8.5 1.5c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3" />
                  </svg>
              </Link>
            </div>
          )}
        </div>
        <div className="flex laptop:hidden items-center justify-end tablet:gap-6 gap-6 py-5 ">
          <div className="relative">
            <Link className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href={page.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 
                7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 
                1.021T15.5 6.5V7h1.885q.69 0 
                1.152.463T19 8.616v10.769q0 
                .69-.463 1.153T17.385 21zm0-1h10.769q.23 
                0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 
                8H15.5v2.5q0 .214-.143.357T15 
                11t-.357-.143t-.143-.357V8h-5v2.5q0 
                .214-.143.357T9 11t-.357-.143T8.5 
                10.5V8H6.616q-.231 
                0-.424.192T6 8.616v10.769q0 
                .23.192.423t.423.192M9.5 
                7h5v-.5q0-1.056-.722-1.778T12 
                4t-1.778.722T9.5 6.5zM6 20V8z" />
              </svg>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {englishToKhmerNumber(cartCount)}
              </span>
            )}
          </div>

        
          <Link className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href={page.login}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              className='h-8 w-8 text-white'><path fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 
                1.79-4 4s1.79 4 4 4m0 
                2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" />
            </svg>
          </Link>

        
          <button className={`h-10 tablet:w-auto w-10 bg-primary flex items-center justify-center rounded-lg`}
            onClick={handleMenuClick}>
            <span className='flex px-4 items-center justify-center gap-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7 text-white' viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 
                  16h16q.425 0 .713.288T21 17t-.288.713T20 
                  18zm0-5q-.425 0-.712-.288T3 
                  12t.288-.712T4 11h16q.425 0 .713.288T21 
                  12t-.288.713T20 13zm0-5q-.425 
                  0-.712-.288T3 7t.288-.712T4 6h16q.425 
                  0 .713.288T21 7t-.288.713T20 8z" />
              </svg>
              <p className='text-white tablet:block hidden'>មីនុយ</p>
            </span>
          </button>
          { session?.user?.isAdmin && (
            <div className="relative">
              <Link className="h-10 w-10 bg-primary flex items-center justify-center rounded-lg" href='/admin/program'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M18 12h-2.18c-.17.7-.44 1.35-.81 1.93l1.54 1.54l-2.1 2.1l-1.54-1.54c-.58.36-1.23.63-1.91.79V19H8v-2.18c-.68-.16-1.33-.43-1.91-.79l-1.54 1.54l-2.12-2.12l1.54-1.54c-.36-.58-.63-1.23-.79-1.91H1V9.03h2.17c.16-.7.44-1.35.8-1.94L2.43 5.55l2.1-2.1l1.54 1.54c.58-.37 1.24-.64 1.93-.81V2h3v2.18c.68.16 1.33.43 1.91.79l1.54-1.54l2.12 2.12l-1.54 1.54c.36.59.64 1.24.8 1.94H18zm-8.5 1.5c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3" />
                  </svg>
              </Link>
            </div>
          )}
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
                  <Link href={n.link} onClick={handleLinkClick}>{n.title}</Link>
                  <button onClick={() => toggleSubmenu(index)}>
                    {n.submenu && (
                      <span className={` text-primary `}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24"
                          className={`transition-transform duration-300 ${activeSubmenuIndex === index ? 'rotate-180' : ''}`}>
                          <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 
                          10l-6 6l-6-6z" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                {n.submenu && (
                  <div className={`bg-gray-50 overflow-hidden transform transition-transform duration-1000 ease-out ${activeSubmenuIndex === index ? "max-h-40" : "max-h-0"}`}>
                    {n.submenu.map((sub, subIndex) => (
                      <Link key={subIndex} href={sub.link}
                        className="block py-2 pl-8 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={handleLinkClick}>
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

    
            <Link href={page.login} className='bg-primary text-white py-2 px-2 '>
              {session?.user ? 'គណនីរបស់ខ្ញុំ' : 'ចូលរៀន/ចុះឈ្មោះ'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
