import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  MdOutlineExplore,
  MdFeaturedVideo,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
export default function Sidebar() {
  const location = useLocation();
  const Links = [
    {
      id: 0,
      name: "Home",
      path: "/",
      icon: IoMdHome,
    },
    {
      id: 1,
      name: "Search",
      path: "/serach",
      icon: IoSearch,
    },

    {
      id: 2,
      name: "Explore",
      path: "/explore",
      icon: MdOutlineExplore,
    },
    {
      id: 3,
      name: "Reels",
      path: "/reels",
      icon: MdFeaturedVideo,
    },
    {
      id: 4,
      name: "Messages",
      path: "/messages",
      icon: TbBrandMessenger,
    },
    {
      id: 5,
      name: "Notifications",
      path: "/notifications",
      icon: FaRegHeart,
    },
    {
      id: 6,
      name: "Create",
      path: "/create",
      icon: MdOutlineCreateNewFolder,
    },
    {
      id: 7,
      name: "Profile",
      path: "/profile",
      icon: FaRegUserCircle,
    },
  ];
  return (
    <div className="w-[19%] h-full overflow-hidden">
      <div className=" h-full border shadow">
        <div className="px-4 py-6 h-full">
          <img src="src/assets/Instagram.svg" alt="" className="my-6 px-2" />
          <nav className="h-full">
            <ul className="mb-7">
              {Links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className={
                        location.pathname === link.path
                          ? "flex items-center gap-x-2 rounded-lg px-2  py-3 mb-2 cursor-pointer font-bold hover:bg-[#dededf87]"
                          : "flex items-center gap-x-2 rounded-lg py-3  px-2 mb-2 cursor-pointer hover:bg-[#dededf87]"
                      }
                    >
                      <link.icon
                        className={
                          location.pathname === link.path
                            ? "text-[1.7rem] text-black"
                            : "text-[1.7rem] text-black/70"
                        }
                      />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-12">
              <button className="flex items-center gap-x-2 px-2 py-3 rounded-lg cursor-pointer hover:bg-[#dededf87] w-full">
                <FaThreads className="text-2xl text-black" />
                Thredas
              </button>
              <button className="flex items-center gap-x-2 px-2 py-3 rounded-lg cursor-pointer hover:bg-[#dededf87] w-full">
                <HiBars3 className="text-2xl text-black" />
                More
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
