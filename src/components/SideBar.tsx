import React from "react";
import Header from "./Header";
import { FaUserCog } from "react-icons/fa";
import {
  FaCalendarDays,
  FaClockRotateLeft,
  FaHouse,
  FaPeopleGroup,
  FaPeopleLine,
} from "react-icons/fa6";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 h-screen bg-[#F7F7F7] shadow-2xl w-[15%] overflow-y-auto">
      <div className="mt-14">
        <Header />
        <ul className="ml-12 mt-14 flex items-start gap-6 justify-evenly flex-col">
          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaHouse className="h-8 text-[#673BB7]" />
            <li>
              <a href="" className="text-xs font-medium text-[#673BB7] ">
                Dashboard
              </a>
            </li>
          </div>
          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaPeopleLine className="h-8 text-gray-400" />
            <li>
              <a
                href=""
                className="text-xs  text-gray-600 font-medium hover:text-[#673BB7] "
              >
                Customers
              </a>
            </li>
          </div>

          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaPeopleGroup className="h-8 text-gray-400" />
            <li>
              <a
                href=""
                className="text-xs text-gray-600 font-medium hover:text-[#673BB7]"
              >
                Stylists
              </a>
            </li>
          </div>
          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaClockRotateLeft className="h-8 text-gray-400" />
            <li>
              <a
                href=""
                className="text-xs text-gray-600 font-medium hover:text-[#673BB7]"
              >
                Schedule
              </a>
            </li>
          </div>
          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaCalendarDays className="h-8 text-gray-400" />
            <li>
              <a
                href=""
                className="text-xs text-gray-600 font-medium hover:text-[#673BB7]"
              >
                Reservations
              </a>
            </li>
          </div>
          <div className="flex items-center gap-6 hover:border-l-2 border-[#673BB7] pl-2">
            <FaUserCog className="h-8 text-gray-400" />
            <li>
              <a
                href=""
                className="text-xs text-gray-600 font-medium hover:text-[#673BB7]"
              >
                Settings
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
