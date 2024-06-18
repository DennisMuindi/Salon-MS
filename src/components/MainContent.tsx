import React from "react";
import { FaArrowDown, FaBell } from "react-icons/fa";
import Reservations from "./Reservations";

export default function MainContent() {
  return (
    <div className="right-0 w-[85%] bg-[#f0f5f7] ">
      <div className="flex justify-end mr-20 mt-5">
        <div className="flex items-center gap-3 ">
          <FaBell className="h-8 text-gray-400 mr-10" />
          <div className="flex items-center">
            <img
              src="/powder.png"
              alt=""
              className="h-10 w-10 rounded-full border-2 border-gray-300"
            />
            <p className="font-medium text-xs mr-5 ml-2">Rachel Linda</p>
          </div>
          <FaArrowDown className="h-5 text-gray-400" />
        </div>
      </div>
      {/* Confirmed pending and cancelled divs */}
      <div className="ml-10 mt-5 flex items-center justify-around w-[65%]">
        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/confirmed.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">13</span>
            <h2 className=" text-[11px] text-[#5B5B5B]">Confirmed</h2>
          </div>
        </div>

        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/pending.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">22</span>
            <h2 className=" text-[11px] text-[#5B5B5B]">Pending</h2>
          </div>
        </div>

        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/cancelled.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">5</span>
            <h2 className=" text-[11px] text-[#5B5B5B]">Cancelled</h2>
          </div>
        </div>
      </div>
      {/* Reservation */}
      <Reservations />
    </div>
  );
}
