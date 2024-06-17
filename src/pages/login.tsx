import { FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
export default function Login() {
  const isOpen = true;
  return (
    <>
      <div className="relative w-1/2 flex flex-col items-center justify-center bg-[#f0f5f7]">
        <div className="absolute inset-0 bg-[url('/powder.png')] bg-no-repeat bg-center blur-md"></div>
        <div className="relative z-10 mt-2">
          <div className="flex items-center">
            <img src="/powder.png" alt="" className="h-10 mr-2" />
            <div>
              <div className="flex items-center">
                <h1 className="text-[2.5rem] font-medium">Glamour</h1>
              </div>
              <div className="flex items-start justify-center">
                <p className="font-medium text-sm">Beauty</p>
                <p className="font-medium text-sm text-[#673BB7] mx-1">
                  parlor
                </p>
                <p className="font-medium text-sm text-[#E83E8C]">& Spa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 shadow-lg bg-white my-3 p-2 w-[50%] rounded-xl flex items-center">
          <FaUser className="h-8 ml-2 mr-1 text-gray-300" />
          <input
            type="text"
            placeholder="Enter your email or username"
            className="pl-3 outline-none text-sm"
          />
        </div>
        <div className="relative z-10 shadow-lg bg-white my-3 p-2 w-[50%] rounded-xl flex items-center">
          <FaLock className="h-6 ml-2 mr-1 text-gray-300" />
          <input
            type="password"
            placeholder="Enter your password"
            className="pl-3 outline-none text-sm"
          />
          {isOpen ? (
            <FaEye className="h-8 mr-1 text-gray-400 hover:text-gray-500" />
          ) : (
            <FaEyeSlash className="h-8 mr-1 text-gray-400 hover:text-gray-500" />
          )}
        </div>
        <div className="relative z-10 flex my-4 ml-5 w-1/2">
          <input type="checkbox" className="mr-6" />
          <p className="font-medium text-gray-800">Remember Me</p>
        </div>
        <button className="relative z-10 w-1/2 my-5 py-2 rounded-lg bg-[#E83E8C] hover:bg-[#f565a8] hover:delay-150 border-none text-white font-medium text-lg text-center">
          Sign In
        </button>
        <div className="relative z-10 flex gap-4 my-2 ml-5 w-1/2">
          <p className="font-medium text-sm text-gray-500">Forgot Password?</p>
          <p className="font-medium text-sm underline text-[#E83E8C] hover:text-[#ed72ac] hover:delay-75 cursor-pointer">
            Reset it from here
          </p>
        </div>
      </div>
    </>
  );
}
