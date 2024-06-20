import React from "react";
import { FaUserPlus, FaEdit, FaTrash, FaPen } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

export default function Table() {
  return (
    <div className="ml-20 my-5 w-[70%]">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search Customer By Name"
          className="outline-none text-left py-2 px-5 text-sm rounded-lg bg-[#f7f7f7] border border-gray-400"
        />
        <div className="bg-[#4E4891] flex items-center py-2 px-4 gap-2 rounded-lg">
          <FaUserPlus className="h-6 text-white" />
          <button className="text-white font-medium text-sm">Add New</button>
        </div>
      </div>

      {/* Table headers */}
      <div className="flex w-full mt-7">
        <div className="flex-1 p-2 text-[#B1B1B1] text-sm font-semibold text-left">
          Name
        </div>
        <div className="flex-1 p-2 text-[#B1B1B1] text-sm font-semibold text-left">
          Telephone
        </div>
        <div className="flex-1 p-2 text-[#B1B1B1] text-sm font-semibold text-left">
          Gender
        </div>
        <div className="flex-1 p-2 text-[#B1B1B1] text-sm font-semibold text-left">
          Location
        </div>
        <div className="flex-1 p-2 text-[#B1B1B1] text-sm font-semibold text-left">
          Actions
        </div>
      </div>

      {/* Table rows */}
      {[
        {
          name: "Rhoda Mutuku",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "John Doe",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "Jane Smith",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "Emma Johnson",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "Chris Martin",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "John Doe",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
        {
          name: "Emma Johnson",
          telephone: "070000000",
          gender: "Female",
          location: "Machakos",
        },
      ].map((row, index) => (
        <div
          key={index}
          className={`flex w-full ${
            index % 2 === 0 ? "bg-transparent shadow-custom-xl" : ""
          } my-2 py-2 rounded-xl`}
        >
          <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
            {row.name}
          </div>
          <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
            {row.telephone}
          </div>
          <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
            {row.gender}
          </div>
          <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
            {row.location}
          </div>
          <div className="flex-1 gap-5 p-2 text-[#454545] text-sm font-semibold text-left flex items-center ">
            <div className=" rounded-full border border-gray-500 p-1">
              <FaPenClip className="text-blue-500  cursor-pointer" />
            </div>
            <div className=" rounded-full border border-gray-500 p-1">
              <FaTrash className="text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
