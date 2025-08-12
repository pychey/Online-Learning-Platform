const RightArrow = ({ color="currentColor", size="24", className }) => {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        >
        <path
            fill={color}
            fillRule="evenodd"
            d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
        />
        </svg>
    )
}

export default RightArrow;
