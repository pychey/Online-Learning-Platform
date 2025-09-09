'use client'

import { useEffect, useRef, useState } from "react"

const InlineTitleInput = ({
  value,
  onChange,
  className = '',
  inputClassName = '',
}) => {
  const spanRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (spanRef.current) {
      const newWidth = spanRef.current.offsetWidth + (isEditing ? 30 : 4)
      setWidth(newWidth)
    }
  }, [value, isEditing])

  const handleEditing = () => {
		setIsEditing(true)
		setWidth(width + 24)
	}

	const handleStopEditing = () => {
		setIsEditing(false)
		setWidth(width - 24)
	}

  return (
    <div className={`relative ${className}`}>
      <span
        ref={spanRef}
        className="absolute invisible whitespace-pre"
        style={{ font: "inherit", padding: "0 2px" }}
      >
        {value || ""}
      </span>

      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleEditing}
        onBlur={handleStopEditing}
        className={`
          bg-transparent outline-none border-admin-border
          ${isEditing
            ? "pl-4 py-2 bg-white border rounded-md border-admin-border text-black shadow-2xs"
            : "cursor-pointer transition-all duration-300"}
          ${inputClassName}
        `}
        style={{ width: `${Math.max(width, 24)}px` }}
      />
    </div>
  )
}

export default InlineTitleInput
