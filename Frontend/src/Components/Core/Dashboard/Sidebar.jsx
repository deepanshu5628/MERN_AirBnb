import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Sidebar() {
  const sidebarLinks = [
    {
      id: 1,
      name: "My Profile",
      path: "/dashboard/my-profile",
      type: "all",
      icon: "VscAccount",
    },
    {
      id: 5,
      name: "Your Listings",
      path: "/dashboard/enrolled-courses",
      icon: "VscMortarBoard",
      type: "all",
    },
    {
      id: 6,
      name: "Wishlist",
      path: "/dashboard/cart",
      icon: "VscHistory",
      type: "all",
    },
    {
      id: 7,
      name: "Setting",
      path: "/dashboard/setting",
      type: "all",
      icon: "VscHistory",
    },
  
  ];
  const {userinfo}=useSelector((state)=>state.auth);
  const location = useLocation();
  const currpath=location.pathname;
  return (
    <div
      className="bg-slate-200 md:fixed justify-evenly md:justify-start flex flex-row md:flex-col w-full md:w-[13%] md:h-[calc(100vh-3.5rem)] mt-[4.2rem]  pl-1  py-4
          text-richblack-25"
    >
      {sidebarLinks.map((element, index) => {
        return (
          <div
            key={element.id}
            className={`  items-center justify-center py-2 px-2 cursor-pointer
             pr-2  `}
          >
            {element.type === "all" && (
              <Link to={element.path}>
                <p className={` pl-2${element.path==currpath ? " border-l-4 p-2 w-full border-yellow-25 rounded-md bg-green-700":null}`}>{element.name}</p>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
