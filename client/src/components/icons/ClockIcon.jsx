
const ClockIcon = ({ size = "24", color = "currentColor" }) => {
  
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <path 
        fill={color}
        d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H8z"
      />
    </svg>
  )
}

export default ClockIcon

// export const ClockIcon2 = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//     >
//       <path
//         fill="none"
//         stroke="#001bfc"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-miterlimit="10"
//         stroke-width="1.5"
//         d="M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
//       />
//     </svg>
//   );
// };
