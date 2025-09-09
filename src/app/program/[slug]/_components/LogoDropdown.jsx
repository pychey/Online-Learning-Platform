'use client'

import { useState, useRef, useEffect } from 'react'

const LogoDropdown = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selected = options.find(opt => opt.value === value)

  return (
    <div ref={dropdownRef} className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 w-full border border-admin-border rounded text-left bg-white 
                hover:border-gray-300 focus:outline-none cursor-pointer transform duration-300"
      >
        <div className="flex items-center gap-2">
          {selected?.value && (
            <img
              src={`${selected.value}`}
              alt={selected.label}
              className="w-6 h-6 object-contain"
            />
          )}
          <span>{selected?.label || 'Select a logo'}</span>
        </div>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-md 
                      max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              <img
                src={`${option.value}`}
                alt={option.label}
                className="w-5 h-5 object-contain"
              />
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LogoDropdown