'use client'

import { useRef, useEffect } from 'react';

const AdminDescriptionInput = ({ value, onChange, placeholder }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-3 w-[640px] bg-white border rounded-md border-admin-border text-sm font-medium
                 text-gray-700 focus:text-black focus:shadow-md focus:outline-none transition-all duration-300
                 resize-none overflow-hidden leading-relaxed"
    />
  );
}

export default AdminDescriptionInput