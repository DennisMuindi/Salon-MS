import { useRouter } from "next/router";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";

export default function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    router.push("/dashboard");
  };
  return (
    <>
      <div className="relative w-1/2 flex flex-col items-center justify-center bg-[#f0f5f7]">
        <div className="absolute inset-0 bg-[url('/bg-image.png')] bg-no-repeat bg-center bg-contain"></div>
        <div className="relative z-10 mt-2">
          <div className="flex items-center">
            <img src="/powder.png" alt="" className="h-10 mr-2" />
            <div>
              <div className="flex items-center">
                <h1 className="text-[2rem] font-medium glamour">Glamour</h1>
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
          <FaEnvelope className="h-8 ml-2 mr-1 text-gray-300" />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your email or username"
            className="pl-3 outline-none text-sm"
          />
        </div>
        <div className="relative z-10 shadow-lg bg-white my-3 p-2 w-[50%] rounded-xl flex items-center">
          <FaUnlockKeyhole className="h-6 ml-2 mr-1 text-gray-300" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <button
          className="relative z-10 w-1/2 my-5 py-2 rounded-lg bg-[#E83E8C] hover:bg-[#f565a8] hover:delay-150 border-none text-white font-medium text-lg text-center "
          onClick={handleSubmit}
        >
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
