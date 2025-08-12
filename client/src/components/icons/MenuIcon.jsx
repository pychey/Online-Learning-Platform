
const MenuIcon = ({ size = "24", color = "currentColor", className }) => {

    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 24 24" 
            className={className}
        >
            <rect x="2.5" y="2.5" width="9" height="9" stroke={color} fill="none" strokeWidth="1" />
            <rect x="13.5" y="2.5" width="9" height="9" stroke={color} fill="none" strokeWidth="1" />
            <rect x="2.5" y="13.5" width="9" height="9" stroke={color} fill="none" strokeWidth="1" />
            <rect x="13.5" y="13.5" width="9" height="9" stroke={color} fill="none" strokeWidth="1" />
        </svg>
    )
}

export default MenuIcon