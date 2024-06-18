import React from "react";
import { FaArrowDown, FaBell } from "react-icons/fa";
import Reservations from "./Reservations";
import Table from "./Table";

export default function MainContent() {
  return (
    <div className="ml-[15%] w-[85%] bg-[#f0f5f7] h-screen overflow-y-auto">
      <div className="flex justify-end mr-20 mt-5 sticky top-5 z-10">
        <div className="flex items-center gap-3 ">
          <img src="/notification.png" alt="" className="h-7" />
          <div className="flex items-center">
            <img
              src="/avatar.png"
              alt=""
              className="h-10 w-10 rounded-full border-2 border-[#673BB7]"
            />
            <p className="font-medium text-xs mr-5 ml-2">Linda S</p>
          </div>
          <img src="/Arrow.png" alt="" className="h-5" />
        </div>
      </div>
      {/* Confirmed pending and cancelled divs */}
      <div className="ml-10 mt-10 flex items-center justify-around w-[70%]">
        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/confirmed.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">13</span>
            <h2 className=" text-[11px] text-[#00B55C] font-medium">
              Confirmed
            </h2>
          </div>
        </div>

        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/pending.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">22</span>
            <h2 className=" text-[11px] text-[#B59800] font-medium">Pending</h2>
          </div>
        </div>

        <div className="flex items-center bg-[#f7f7f7] rounded-xl w-[20%] relative py-3 shadow-custom-xl">
          <div className="absolute -left-4 z-0">
            <img src="/cancelled.png" alt="" className="h-12 " />
          </div>
          <div className="ml-10 flex items-center justify-between gap-4">
            <span className="font-medium text-2xl">5</span>
            <h2 className=" text-[11px] text-[#783F3F] font-medium">
              Cancelled
            </h2>
          </div>
        </div>
      </div>
      {/* Reservation */}
      <Reservations />
      <Table />
    </div>
  );
}
