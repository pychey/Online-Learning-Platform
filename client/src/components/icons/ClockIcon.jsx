
const ClockIcon = ({ size = "24", color = "currentColor", className }) => {
  
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
    >
      <path 
        fill={color}
        d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H8z"
      />
    </svg>
  )
}

export default ClockIcon;