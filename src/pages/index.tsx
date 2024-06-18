import { Inter } from "next/font/google";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[#f0f5f7] w-full h-screen flex items-center justify-center">
        <Login />
      </div>
    </>
  );
}
