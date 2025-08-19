
const PlusIcon = ({ size = 24, color = "currentColor", className }) => {

	return(
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			width={size} 
			height={size} 
			viewBox="0 0 32 32"
			className={className}
		>
			<path 
				fill={color} 
				d="M25.98 12.896h-6.67V6.23h-6.665v6.666H5.98v6.666h6.667v6.667h6.665V19.56h6.667z"
			></path>
		</svg>
	)
}

export default PlusIcon