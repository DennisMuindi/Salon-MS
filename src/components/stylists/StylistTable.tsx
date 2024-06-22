import React from "react";
import { FaUserPlus, FaTrash, FaStar } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

export default function Table() {
  const renderStars = (rating: any) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={`${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="ml-20 my-5 w-[70%]">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search Stylist By Name"
          className="outline-none text-left py-2 px-5 text-sm rounded-xl border border-gray-400"
        />
        <div className="bg-[#4E4891] flex items-center py-2 px-4 gap-2 rounded-xl">
          <FaUserPlus className="h-6 text-white" />
          <button className="text-white font-medium text-sm">Add New</button>
        </div>
      </div>

      {/* Table headers */}
      <div className="flex w-full mt-7 sticky top-0 z-10">
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Name
        </div>
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Service
        </div>
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Gender
        </div>
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Location
        </div>
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Rating
        </div>
        <div className="flex-1 p-2 text-[#707070] text-sm font-semibold text-left">
          Actions
        </div>
      </div>

      {/* Table rows */}
      <div className="max-h-[400px] overflow-y-scroll">
        {[
          {
            name: "Rhoda Mutuku",
            service: "Haircut",
            gender: "Female",
            location: "Machakos",
            rating: 4,
          },
          {
            name: "John Doe",
            service: "Shave",
            gender: "Male",
            location: "Machakos",
            rating: 5,
          },
          {
            name: "Jane Smith",
            service: "Hair Color",
            gender: "Female",
            location: "Machakos",
            rating: 3,
          },
          {
            name: "Emma Johnson",
            service: "Manicure",
            gender: "Female",
            location: "Machakos",
            rating: 4,
          },
          {
            name: "Chris Martin",
            service: "Pedicure",
            gender: "Male",
            location: "Machakos",
            rating: 4,
          },
          {
            name: "John Doe",
            service: "Haircut",
            gender: "Male",
            location: "Machakos",
            rating: 5,
          },
          {
            name: "Emma Johnson",
            service: "Massage",
            gender: "Female",
            location: "Machakos",
            rating: 4,
          },
          {
            name: "Jane Smith",
            service: "Hair Color",
            gender: "Female",
            location: "Machakos",
            rating: 5,
          },
        ].map((row, index) => (
          <div
            key={index}
            className={`flex w-full my-2 py-2 rounded-xl ${
              index % 2 === 0 ? " shadow-md" : ""
            }`}
          >
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {row.name}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {row.service}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {row.gender}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {row.location}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left flex items-center">
              {renderStars(row.rating)}
            </div>
            <div className="flex-1 gap-5 p-2 text-[#454545] text-sm font-semibold text-left flex items-center">
              <div className="rounded-full border-2 border-[#4E4891] p-1 shadow-custom-xl">
                <FaPenClip className="text-blue-500 cursor-pointer" />
              </div>
              <div className="rounded-full border-2 border-[#4E4891] p-1 shadow-custom-xl">
                <FaTrash className="text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
