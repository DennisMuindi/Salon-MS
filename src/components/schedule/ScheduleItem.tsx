import React from "react";

export default function ScheduleItem() {
  return (
    <div className="w-full mx-20 mt-10 flex flex-col gap-4">
      {/* services */}
      <div className="flex items-center gap-3 w-[30%] bg-[#dddcdc] py-2 rounded-xl px-6">
        <div className="bg-[#bdbcbc] w-12 p-1 rounded-md">
          <img src="/Vector.png" alt="" className="h-10 w-10" />
        </div>

        <div>
          <p className="text-sm font-medium text-[#3f3e3e]">08.00-9.00am</p>
          <h4 className="py-1 text-sm font-semibold">Wash and Set</h4>
          <div className="flex items-center justify-between gap-16">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-medium ">Customer : </h3>
              <p className="text-sm font-medium text-[#3f3e3e]">Linda S</p>
            </div>

            <button className="text-xs font-medium text-[#2626BC] underline ml-6">
              Mark done
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-[30%] bg-[#dddcdc] py-2 rounded-xl px-6">
        <div className="bg-[#bdbcbc] w-12 p-1 rounded-md">
          <img src="/Vector.png" alt="" className="h-10 w-10" />
        </div>

        <div>
          <p className="text-sm font-medium text-[#3f3e3e]">08.00-9.00am</p>
          <h4 className="py-1 text-sm font-semibold">Crocheting</h4>
          <div className="flex items-center justify-between gap-16">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-medium ">Customer : </h3>
              <p className="text-sm font-medium text-[#3f3e3e]">Linda S</p>
            </div>

            <button className="text-xs font-medium text-[#2626BC] underline ml-6">
              Mark done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
