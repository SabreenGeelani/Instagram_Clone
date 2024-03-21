import { HiDotsHorizontal, HiOutlineBookmark } from "react-icons/hi";
import { IoMdHeartEmpty, IoIosSend } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { useState } from "react";
import NewModal from "./NewModal";

export default function Modal({
  src,
  setposts,
  post1,
  post5,
  setpostNxt,
  setpostPrev,
}) {
  const [isNewModal, setIsNewModal] = useState(false);
  console.log(isNewModal);
  const handleClick = () => {
    console.log("clicked");
    setIsNewModal(true);

    // console.log(setIsNewModal);
  };
  const handleNext = () => {
    setpostNxt(true);
    setposts(false);
  };
  const handlePrev = () => {
    setpostPrev(true);
    setposts(false);
  };
  return (
    <>
      <div
        className="fixed  flex  justify-center top-0 left-0 bg-black/70 w-full h-full py-8 pt-0"
        onClick={() => setposts(false)}
      ></div>
      <div className="absolute  w-[80%] h-full flex items-center gap-y-16 z-30 left-[10%] top-0">
        <img src={src} alt="" className=" object-cover w-[60%] h-[43.9rem]" />
        <div className="bg-white w-[40%] h-auto">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex gap-x-3 items-center">
              <img
                src="src/assets/profile_img.jpg"
                alt=""
                className="w-10 rounded-full cursor-pointer"
              />
              <p className="font-medium">sabreengeelani</p>
            </div>
            <HiDotsHorizontal
              className="cursor-pointer"
              onClick={handleClick}
            />
          </div>
          <main className="p-4">
            <div className="flex gap-x-3 items-center">
              <img
                src="src/assets/profile_img.jpg"
                alt=""
                className="w-10 rounded-full cursor-pointer"
              />
              <p className="flex gap-x-1 font-medium">
                sabreengeelani{" "}
                <span className="flex gap-x-1 font-normal">
                  Nature{" "}
                  <span className="text-blue-400">
                    #naturephotography #peace
                  </span>
                </span>
              </p>
            </div>
            <div className="h-[25rem] flex flex-col items-center justify-center">
              <h1 className="py-2 font-bold text-2xl">No comments yet</h1>
              <p className="text-sm">Start the conversation</p>
            </div>
          </main>
          <div className="py-3 border-y">
            <div className="flex justify-between items-center mb-2 px-4">
              <div className="flex items-center gap-x-2 text-3xl">
                <IoMdHeartEmpty />
                <BiMessageRounded />
                <IoIosSend />
              </div>
              <HiOutlineBookmark className="text-2xl" />
            </div>
            <div className="px-4">
              <p className="text-sm">
                Be the first to <span className="font-medium">like this</span>
              </p>
              <p className="text-xs text-gray-500">51 minutes ago</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <FaRegSmile className="text-2xl" />
              <input
                type="text"
                placeholder="Add a comment"
                className="border-none outline-none"
              />
            </div>
            <p className="text-blue-200 font-medium">Post</p>
          </div>
        </div>
      </div>
      <RxCross1
        className="absolute text-white left-[97%] top-[2%] text-2xl cursor-pointer"
        onClick={() => setposts(false)}
      />

      {post5 || (
        <FaCircleChevronRight
          className="absolute left-[96%] top-[50%] text-white text-3xl cursor-pointer hover:text-gray-200 z-50"
          onClick={handleNext}
        />
      )}
      {post1 || (
        <FaCircleChevronLeft
          className="absolute left-[2%] top-[50%] text-white text-3xl cursor-pointer hover:text-gray-200 z-50"
          onClick={handlePrev}
        />
      )}
      {isNewModal && <NewModal setNewModal={setIsNewModal} />}
    </>
  );
}
