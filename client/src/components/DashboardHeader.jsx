import ProfileIcon from "./icons/ProfileIcon";
import TagIcon from "./icons/TagIcon";
import HelpIcon from "./icons/HelpIcon";
import PowerIcon from "./icons/PowerIcon";
import StarIcon from "../components/icons/StarIcon";
import BookIcon from "./icons/Book";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { 
    title: "កែប្រូហ្វាល់", 
    url: "/",
    icon: ProfileIcon,
  },
  { 
    title: "មើលការបញ្ជាទិញ",
    url: "/", 
    icon: TagIcon },
  { 
    title: "ជំនួយ", 
    url: "/help",
    mobileHidden: true, 
    icon: HelpIcon 
  },
  { 
    title: "ចាកចេញ", 
    url: "/",
    icon: PowerIcon 
  },
];

const TABS = [
  { title: "វគ្គសិក្សារបស់ខ្ញុំ", url: "/my-courses", icon: BookIcon },
  { title: "វិញ្ញាបនបត្ររបស់ខ្ញុំ", url: "/my-certificates", icon: StarIcon },
];

const UserIcon = ({ color = "white", size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM8.5 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984Z"
        fill={color}
      />
    </g>
  </svg>
);

const DashboardHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <nav className="mt-20 w-full bg-[#898989]">
        <div className="flex items-center justify-center mx-auto w-full max-w-[1110px]">
          <div className="max-w-2/5 laptop:px-8 px-6 py-4 m w-full tablet:block hidden">
            <UserIcon />
          </div>

          <div className="flex flex-1 tablet:justify-end gap-2.5 laptop:gap-10 tablet:gap-7 px-4 py-4 
                          laptop:px-8 w-full tablet:min-w-[480px] laptop:min-w-[540px] font-normal 
                          text-white tablet:font-medium text-sm tablet:text-base"
          >
            {NAV_ITEMS.map(({ title, mobileHidden, url, icon: Icon }, index) => (
              <button
                key={index}
                className={`flex items-center gap-1 mx-auto ${ mobileHidden ? "tablet:flex hidden" : ""} 
                          cursor-pointer`}
                onClick={() => navigate(url)}
              >
                <Icon size={16} />
                <p className="text-sm tablet:text-base">{title}</p>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mb-0.5 px-2.5 pt-4 tablet:pt-6 w-full border-b border-b-[#CCCCCC] bg-[#F5F5F5]">
        <div className="flex justify-center mx-auto mb-4 w-full tablet:hidden">
          <UserIcon color="#808080" />
        </div>

        <div className="flex justify-center gap-8 tablet:gap-12 max-w-[1080px] w-full h-full tablet:mx-auto">
          {TABS.map(({ title, url, icon: Icon }, index) => {
            const isActive = pathname === url;
            return (
              <button
                key={index}
                onClick={() => navigate(url)}
                className={
                  `flex flex-col laptop:flex-row items-center justify-center gap-1 laptop:gap-1.5 
                  px-2 py-4 w-full tablet:w-[240px] laptop:w-1/3 ${isActive ? "border-t-primary -mb-0.5" 
                  : "border-t-[#CBCBCB] hover:[box-shadow:rgba(0,0,0,0.16)_0px_3px_6px_-4px,_rgba(0,0,0,0.23)_0px_3px_6px_0px]"} 
                bg-white border-t-4 rounded-t-sm hover:rounded-b-sm cursor-pointer transition-shadow duration-300`}
              >
                <Icon size={20} className={isActive ? "text-primary" : "text-[#808080]"} />
                <span
                  className={`text-sm laptop:text-xl laptop:font-medium ${ isActive ? "text-black" 
                            : "text-[#808080]"}`}
                >
                  {title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
