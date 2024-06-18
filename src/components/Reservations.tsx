import React from "react";
import { FaFileCirclePlus } from "react-icons/fa6";

export default function Reservations() {
  return (
    <div className="ml-24 mt-10 w-[70%] ">
      <div className="flex items-center w-full">
        <h3 className="text-sm font-medium w-[59%]">Reservations</h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-[#E83E8C] px-5 gap-2 py-2 rounded-xl ">
            <FaFileCirclePlus className="h-5 text-white" />
            <button className=" rounded-lg border-none text-white text-xs font-bold text-center ">
              Create Reservation
            </button>
          </div>
          {/* VIew all  */}
          <a
            href=""
            className="text-xs font-semibold py-1 text-[#0067C2] underline"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}
