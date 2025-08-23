'use client'

import {useState} from 'react'

const FAQ = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => setActiveIndex(prev => prev === index ? null : index);

  return (
    <div className="mt-6 bg-gray-100 text-xl rounded-sm">
      {items.map((item, index) => (
        <div key={index}>
          <div 
            className={`flex justify-start items-center px-4 py-3 opacity-70 cursor-pointer ${index < items.length-1 ? 'border-b border-gray-300' : ''}`} 
            onClick={() => toggle(index)}
          >
            <span className={`${activeIndex === index ? 'text-3xl' : `text-2xl`} w-4 leading-9`}>{activeIndex === index ? '-' : '+'}</span>
            <p className='ml-4'>{item.title}</p>
          </div>
          <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeIndex === index ? 'max-h-150' : 'max-h-0'}`}>
            <div className="p-4 text-lg border-b border-gray-300">
              {item.describition}
              {item.img &&
                <div className="w-full h-full">
                  <img className="w-full h-full object-contain"src={item.img.src} alt={item.img.alt} />
                </div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default FAQ