import React from "react";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleContent() {
  return (
    <div
      className="ml-[15%] w-[85%] bg-[#f0f5f7] h-screen overflow-x-hidden inset-0 bg-[url(/bg-image.png)] bg-contain bg-center bg-no-repeat"
      style={{ scrollBehavior: "smooth", backgroundSize: "35%" }}
    >
      <div className=" mx-20 mt-3  ">
        <h2 className="text-gray-600 font-medium">Schedule</h2>
      </div>
      <div className="flex items-center justify-between mx-20 mt-3 w-[55%]">
        <div className="flex items-center bg-[#ECECEC]  py-2 px-4 gap-5 rounded-xl">
          <p className="text-sm font-medium text-[#5C5C5C]">Category</p>
          <img src="/Arrow.png" alt="" className="h-5  rounded-full" />
        </div>
        <div className="flex items-center bg-[#ECECEC]  py-2 px-4 gap-5 rounded-xl">
          <p className="text-sm font-medium text-[#5C5C5C]">Attendant</p>
          <img src="/Arrow.png" alt="" className="h-5  rounded-full" />
        </div>
        <div className="flex items-center bg-[#ECECEC]  py-2 px-4 gap-5 rounded-xl">
          <p className="text-sm font-medium text-[#5C5C5C]">Client</p>
          <img src="/Arrow.png" alt="" className="h-5  rounded-full" />
        </div>
      </div>
      <ScheduleItem />
    </div>
  );
}
