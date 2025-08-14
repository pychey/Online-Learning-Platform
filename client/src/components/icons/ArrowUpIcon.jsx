
const ArrowUpIcon = ({ color="currentColor", size=24, style={}, className }) => {

    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 24 24"
            style={style}
            className={className}
        >
            <path 
                fill="none" 
                stroke={color} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="m17 14l-5-5l-5 5"
            />
        </svg>
    )
}

export default ArrowUpIcon