import React from "react";
import StylistsTable from "./StylistTable";

export default function StylistContent() {
  return (
    <div
      className="ml-[15%] w-[85%] bg-[#f0f5f7] h-screen overflow-hidden inset-0 bg-[url(/bg-image.png)] bg-contain bg-center bg-no-repeat"
      style={{ scrollBehavior: "smooth", backgroundSize: "35%" }}
    >
      <div className="flex items-center justify-between mx-20 mt-3 ">
        <h2 className="text-gray-600 font-medium">Stylists</h2>
        <div className="flex items-center gap-3  py-3 ">
          <img src="/notification.png" alt="" className="h-7 mr-5" />
          <div className="flex items-center ">
            <img
              src="/avatar.png"
              alt=""
              className="h-10  w-10  border-2 border-[#673BB7] rounded-full"
            />
            <p className="font-medium text-xs mr-5 ml-2 ">Linda S</p>
          </div>
          <img
            src="/Arrow.png"
            alt=""
            className="h-5 bg-[#f7f7f7] rounded-full"
          />
        </div>
      </div>
      <StylistsTable />
    </div>
  );
}
