import React from "react";

export default function Table() {
  return (
    <div className="ml-24 my-5 w-full">
      <div className="flex flex-col w-full inset-0 bg-[url(/bg-image.png)] bg-contain bg-center bg-no-repeat">
        {/* Table Header */}
        <div className="flex w-[87%]  sticky top-0 z-10">
          <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
            Name
          </div>
          <div className="flex-1 p-2 text-[#707070]  text-sm font-semibold text-left">
            Service
          </div>
          <div className="flex-1 p-2 text-[#707070]  text-sm font-semibold text-left">
            Time
          </div>
          <div className="flex-1 p-2 text-[#707070]  text-sm font-semibold text-left">
            Order Status
          </div>
          <div className="flex-1 p-2 text-[#707070]  text-sm font-semibold text-left">
            Stylist
          </div>
        </div>

        {/* Table Rows */}
        <div className="max-h-[400px] overflow-y-scroll">
          {[
            {
              name: "John Doe",
              service: "Hair Cut",
              time: "09.00-10.00",
              status: "Pending",
              stylist: "Mike. J",
              statusColor: "bg-[#F7C61F]",
              textColor: "text-[#B59800]",
            },
            {
              name: "Rhoda Mutuku",
              service: "Nail Polish",
              time: "08.00-09.00",
              status: "Confirmed",
              stylist: "Linda. S",
              statusColor: "bg-[#ACECB9]",
              textColor: "text-[#00B55C]",
            },
            {
              name: "Jane Smith",
              service: "Facial",
              time: "10.00-11.00",
              status: "Confirmed",
              stylist: "Anna K.",
              statusColor: "bg-[#ACECB9]",
              textColor: "text-[#00B55C]",
            },
            {
              name: "Emma Johnson",
              service: "Massage",
              time: "11.00-12.00",
              status: "Cancelled",
              stylist: "Sophia L.",
              statusColor: "bg-[#ECACAC]",
              textColor: "text-[#783F3F]",
            },
            {
              name: "Emma Johnson",
              service: "Massage",
              time: "11.00-12.00",
              status: "Cancelled",
              stylist: "Sophia L.",
              statusColor: "bg-[#ECACAC]",
              textColor: "text-[#783F3F]",
            },
            {
              name: "Chris Martin",
              service: "Hair Dye",
              time: "12.00-13.00",
              status: "Confirmed",
              stylist: "James W.",
              statusColor: "bg-[#ACECB9]",
              textColor: "text-[#00B55C]",
            },
            {
              name: "John Doe",
              service: "Hair Cut",
              time: "09.00-10.00",
              status: "Pending",
              stylist: "Mike. J",
              statusColor: "bg-[#F7C61F]",
              textColor: "text-[#B59800]",
            },
            {
              name: "Emma Johnson",
              service: "Massage",
              time: "11.00-12.00",
              status: "Cancelled",
              stylist: "Sophia L.",
              statusColor: "bg-[#ECACAC]",
              textColor: "text-[#783F3F]",
            },
          ].map((row, index) => (
            <div
              key={index}
              className={`flex w-[87%] ${
                index % 2 === 0 ? " shadow-md" : ""
              } my-2 py-2 rounded-xl `}
            >
              <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
                {row.name}
              </div>
              <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
                {row.service}
              </div>
              <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
                {row.time}
              </div>
              <div
                className={`flex-1 mr-5 p-2 ${row.textColor} font-semibold text-sm text-center ${row.statusColor} rounded-full`}
              >
                {row.status}
              </div>
              <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
                {row.stylist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
