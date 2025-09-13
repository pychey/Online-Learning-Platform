import Link from "next/link";

const Card = ({ url, children }) => {
  return (
    <Link 
      href={url}
      className="w-full bg-white rounded-lg [box-shadow:rgba(100,100,100,0.15)_0px_1px_4px_0px]"
    >
      {children}
    </Link>
  );
};

export default Card;