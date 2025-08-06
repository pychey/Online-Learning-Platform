
const PlayIcon = ({ size = "24", color = "currentColor", style = {} }) => {
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size}
            viewBox="0 0 24 24"
            style={style}
        >
            <path 
                fill={color} 
                d="M8 5.14v14l11-7z"
            />
        </svg>
    )
}

export default PlayIcon