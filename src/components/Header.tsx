import React from "react";

export default function Header() {
  return (
    <div className="relative mt-10 ml-5">
      <div className="flex items-center">
        <img src="/powder.png" alt="" className="h-7 mr-2" />
        <div>
          <div className="flex items-baseline">
            <h1 className="text-[2rem] font-semibold glamour">Glamour</h1>
            <h1 className="text-[#E83E8C] text-[3rem]">.</h1>
          </div>
          <div className="flex items-start justify-center">
            <p className="font-medium text-[9px]">Beauty</p>
            <p className="font-medium text-[9px] text-[#673BB7] mx-1">parlor</p>
            <p className="font-medium text-[9px] text-[#E83E8C]">& Spa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
