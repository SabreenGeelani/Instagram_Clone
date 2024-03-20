import { useState } from "react";
import { IoMdGrid } from "react-icons/io";
import { CiBookmark, CiCirclePlus } from "react-icons/ci";
import { FaUsersRectangle } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
// import { MdOutlineLinkedCamera } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Modal from "../components/Modal";

export default function Profile() {
  const [isPosts, setIsPosts] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isTagged, setIsTagged] = useState(false);
  const [post1, setpost1] = useState(false);
  const [post2, setpost2] = useState(false);
  const [post3, setpost3] = useState(false);
  const [post4, setpost4] = useState(false);
  const [post5, setpost5] = useState(false);

  const handlePosts = () => {
    setIsPosts(true);
    setIsSaved(false);
    setIsTagged(false);
  };
  const handleSaved = () => {
    setIsPosts(false);
    setIsSaved(true);
    setIsTagged(false);
  };
  const handleTagged = () => {
    setIsPosts(false);
    setIsSaved(false);
    setIsTagged(true);
  };

  return (
    <div className="overflow-y-auto h-full w-full">
      <div className="w-[950px] mx-auto h-full">
        <div className="px-12 py-6 flex gap-x-28 items-center">
          <img
            src="src/assets/profile_img.jpg"
            alt=""
            className="rounded-full w-36 "
          />
          <div className="">
            <div className="flex items-center gap-x-4 py-4">
              <p className="text-xl">sabreenageelani</p>
              <button className="py-1.5 px-3 bg-[#dededf87] rounded-lg font-medium hover:bg-[#dededff7]">
                Edit profile
              </button>
              <button className="py-1.5 px-3 bg-[#dededf87] rounded-lg font-medium hover:bg-[#dededff7]">
                View archieve
              </button>
              <IoSettingsOutline className="text-xl cursor-pointer" />
            </div>
            <div className="flex gap-x-6 py-4">
              <p>
                <span className="font-medium mr-2">0</span>Posts
              </p>
              <p>
                <span className="font-medium mr-2">100</span>followers
              </p>
              <p>
                <span className="font-medium mr-2">110</span>following
              </p>
            </div>
            <h4 className="font-medium">Sabreen</h4>
            <p>Love, Hope and Fear of Allah.</p>
          </div>
        </div>
        <div className="flex items-center gap-x-12 py-12 px-8 border-b">
          <div>
            <img
              src="src/assets/profile_img.jpg"
              alt=""
              className="w-20 rounded-full cursor-pointer"
            />
            <p className="text-center mt-2 text-sm">Recents</p>
          </div>
          <div>
            <img
              src="src/assets/profile_img.jpg"
              alt=""
              className="w-20 rounded-full cursor-pointer"
            />
            <p className="text-center mt-2 text-sm">Fav</p>
          </div>
          <div>
            <img
              src="src/assets/profile_img.jpg"
              alt=""
              className="w-20 rounded-full cursor-pointer"
            />
            <p className="text-center mt-2 text-sm">Gulmarg</p>
          </div>
          <div>
            <CiCirclePlus className="text-[5.8rem] text-gray-500 cursor-pointer" />
            <p className="text-center  text-sm">New</p>
          </div>
          {/* <div>
          <div></div>
          <p>Recents</p>
        </div> */}
        </div>
        <main className="flex flex-col  ">
          <div className="flex items-center justify-center gap-x-8">
            <p
              className={
                isPosts
                  ? "py-4 text-xs font-medium border-t border-black flex items-center cursor-pointer"
                  : "py-4 text-xs flex items-center cursor-pointer"
              }
              onClick={handlePosts}
            >
              <IoMdGrid className="mr-2" />
              POSTS
            </p>
            <p
              className={
                isSaved
                  ? "py-4 text-xs flex items-center cursor-pointer font-medium border-t border-black"
                  : "py-4 text-xs flex items-center cursor-pointer"
              }
              onClick={handleSaved}
            >
              <CiBookmark className="mr-2" />
              SAVED
            </p>
            <p
              className={
                isTagged
                  ? "py-4 text-xs flex items-center cursor-pointer font-medium border-t border-black"
                  : "py-4 text-xs flex items-center cursor-pointer"
              }
              onClick={handleTagged}
            >
              <FaUsersRectangle className="mr-2" />
              TAGGED
            </p>
          </div>
          {isPosts && (
            <div className="grid grid-cols-3 gap-2">
              <div
                className="bg-black bg-[url('src/assets/post1.avif')] cursor-pointer w-full h-full bg-cover bg-center"
                onClick={() => setpost1(true)}
              >
                <div className="hover:bg-black w-full h-full hover:opacity-50 relative">
                  {/* <span className=" absolute top-1/2 left-1/2 z-50 text-white font-medium flex items-center">
                    <BiMessageRounded className="mr-1" />0
                  </span> */}
                </div>
              </div>
              <div
                className="bg-black bg-[url('src/assets/post2.avif')] cursor-pointer w-full h-80"
                onClick={() => setpost2(true)}
              >
                <div className="hover:bg-black w-full h-full hover:opacity-50"></div>
              </div>
              <div
                className="bg-black bg-[url('src/assets/post3.avif')] cursor-pointer"
                onClick={() => setpost3(true)}
              >
                <div className="hover:bg-black w-full h-full hover:opacity-50"></div>
              </div>
              <div
                className="bg-black bg-[url('src/assets/post4.avif')] cursor-pointer w-full h-80"
                onClick={() => setpost4(true)}
              >
                <div className="hover:bg-black w-full h-full hover:opacity-50"></div>
              </div>
              <div
                className="bg-black bg-[url('src/assets/post5.avif')] cursor-pointer"
                onClick={() => setpost5(true)}
              >
                <div className="hover:bg-black w-full h-full hover:opacity-50"></div>
              </div>
            </div>
          )}
          {post1 && (
            <Modal
              src="src/assets/post1.avif"
              setposts={setpost1}
              setpostNxt={setpost2}
              post1={post1}
            />
          )}
          {post2 && (
            <Modal
              src="src/assets/post2.avif"
              setposts={setpost2}
              setpostNxt={setpost3}
              setpostPrev={setpost1}
            />
          )}
          {post3 && (
            <Modal
              src="src/assets/post3.avif"
              setposts={setpost3}
              setpostNxt={setpost4}
              setpostPrev={setpost2}
            />
          )}
          {post4 && (
            <Modal
              src="src/assets/post4.avif"
              setposts={setpost4}
              setpostNxt={setpost5}
              setpostPrev={setpost3}
            />
          )}
          {post5 && (
            <Modal
              src="src/assets/post5.avif"
              setposts={setpost5}
              post5={post5}
              setpostPrev={setpost4}
            />
          )}

          {isSaved && (
            <div className="w-full">
              <header className="flex justify-between items-center w-full mb-3 py-5 ">
                <p className="text-xs text-gray-500">
                  Only you can see what you&apos;ve saved
                </p>
                <a href="" className="text-blue-500 text-sm">
                  New Collection+
                </a>
              </header>
              <section className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <img
                    src="src/assets/img-1.avif"
                    alt=""
                    className="object-cover rounded-md h-72 cursor-pointer"
                  />
                  <h1 className="absolute top-[85%] text-white font-semibold left-4 text-xl">
                    All Posts
                  </h1>
                </div>
                <div className="relative">
                  <img
                    src="src/assets/img-2.jpeg"
                    alt=""
                    className="rounded-md h-72 object-cover cursor-pointer"
                  />
                  <h1 className="absolute top-[85%] text-white font-semibold left-4 text-xl">
                    Nature
                  </h1>
                </div>
                <div className="relative">
                  <img
                    src="src/assets/img-3.jpg"
                    alt=""
                    className="rounded-md h-72 object-cover cursor-pointer"
                  />
                  <h1 className="absolute top-[85%] text-white font-semibold left-4 text-xl">
                    Travel
                  </h1>
                </div>
              </section>
            </div>
          )}
          {isTagged && (
            <section className="grid grid-cols-3 gap-4">
              <img
                src="src/assets/img-4.jpeg"
                alt=""
                className="h-72 rounded-md object-cover"
              />
              <img
                src="src/assets/img-5.jpeg"
                alt=""
                className="h-72 rounded-md object-cover"
              />
            </section>
          )}
        </main>
        <footer className="py-12">
          <ul className="flex gap-x-3 text-xs text-gray-500 pb-4">
            <li className="cursor-pointer hover:underline">Meta</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Jobs</li>
            <li className="cursor-pointer hover:underline">Help</li>
            <li className="cursor-pointer hover:underline">API</li>
            <li className="cursor-pointer hover:underline">Privacy</li>
            <li className="cursor-pointer hover:underline">Terms</li>
            <li className="cursor-pointer hover:underline">Locations</li>
            <li className="cursor-pointer hover:underline">Instagram Lite</li>
            <li className="cursor-pointer hover:underline">Threads</li>
            <li className="cursor-pointer hover:underline">
              Contact Uploading & non-users
            </li>
            <li className="cursor-pointer hover:underline">Meta Verified</li>
            {/* <li></li> */}
          </ul>
          <div className="flex items-center justify-center gap-x-3 text-xs text-gray-500">
            <select name="" id="" className="cursor-pointer outline-none">
              <option value="">English</option>
              <option value="">urdu</option>
              <option value="">Hindi</option>
            </select>
            <p>© 2024 Instagram from Meta</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
