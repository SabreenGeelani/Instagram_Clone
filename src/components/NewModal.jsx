export default function NewModal({ setNewModal }) {
  return (
    <div
      className="fixed  flex items-center justify-center top-0 left-0 bg-black/60 w-full h-full z-40"
      onClick={() => setNewModal(false)}
    >
      <div className="absolute  w-[25rem]  bg-white border rounded-xl h-auto  z-50">
        <ul className="text-center">
          <li className="py-3.5 border-y border-t-0 font-bold text-sm text-red-500 cursor-pointer">
            Delete
          </li>
          <li className="py-3.5 border-y text-sm cursor-pointer">Edit</li>
          <li className="py-3.5 border-y text-sm cursor-pointer">
            Hide like count to others
          </li>
          <li className="py-3.5 border-y text-sm cursor-pointer">
            Turn off commenting
          </li>
          <li className="py-3.5 border-y text-sm cursor-pointer">Go to post</li>
          <li className="py-3.5 border-y text-sm cursor-pointer">
            Share to...
          </li>
          <li className="py-3.5 border-y text-sm cursor-pointer">Copy link</li>
          <li className="py-3.5 border-y text-sm cursor-pointer">Embed</li>
          <li
            className="py-3.5 border-y text-sm border-b-0 cursor-pointer"
            onClick={() => setNewModal(false)}
          >
            Cancel
          </li>
        </ul>
      </div>
    </div>
  );
}
