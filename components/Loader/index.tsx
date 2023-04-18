import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loader() {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-[#777777] opacity-80"></div>
      <div className="fixed z-50 min-h-screen top-0 w-screen flex items-center justify-center mx-auto">
        <div className="relative w-full my-6 mx-auto z-50 flex justify-center">
          <AiOutlineLoading3Quarters className="animate-spin text-white text-6xl" />
        </div>
      </div>
    </>
  );
}
