
const StarIcon = ({ size = 24, color = "currentColor", className }) => {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="64" 
      height="64" 
      viewBox="0 0 512 512"
      className={className}
    >
      <path 
        fill="none" 
        stroke={color} 
        strokeLinejoin="round" 
        strokeWidth="28" 
        d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"
      />
    </svg>
  )
}

export default StarIcon