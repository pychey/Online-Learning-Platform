
export const StarIcon1 = ({ size = 24, color = "currentColor", className }) => {
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


export const StarIcon2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#001bfc"
        d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
      />
    </svg>
  );
};

