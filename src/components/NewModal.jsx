export default function NewModal({ setNewModal }) {
  return (
    <div
      className="fixed  flex items-center justify-center top-0 left-0 bg-black/70 w-full h-full "
      // onClick={() => setNewModal(false)}
    >
      <div className="absolute  w-[30rem] px-10 py-12 bg-white border rounded-xl h-auto flex flex-col justify-center items-center gap-y-16"></div>
    </div>
  );
}
