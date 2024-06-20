import React from "react";
import Header from "./Header";
import {
  FaCalendarDays,
  FaClockRotateLeft,
  FaHouse,
  FaPeopleGroup,
  FaPeopleLine,
} from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaUsersCog } from "react-icons/fa";

export default function SideBar() {
  const router = useRouter();

  const isActive = (path: any) => router.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen bg-[#F7F7F7] shadow-2xl w-[15%] overflow-y-auto">
      <div className="mt-14">
        <Header />
        <ul className="ml-12 mt-14 flex items-start gap-6 justify-evenly flex-col">
          <div
            className={`flex items-center gap-6 pl-2 ${
              isActive("/dashboard") ? "text-[#673BB7]" : "text-gray-600"
            }`}
          >
            <FaHouse
              className={`h-8 ${
                isActive("/dashboard") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/dashboard"
                className={`text-xs font-medium ${
                  isActive("/dashboard") ? "text-[#673BB7]" : "text-gray-600"
                }`}
              >
                Dashboard
              </Link>
            </li>
          </div>
          <div
            className={`flex items-center gap-6   pl-2 ${
              isActive("/customer") ? " text-[#673BB7]" : ""
            }`}
          >
            <FaPeopleLine
              className={`h-8 ${
                isActive("/customer") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/customer"
                className={`text-xs font-medium ${
                  isActive("/customer") ? "text-[#673BB7]" : "text-gray-600"
                } hover:text-[#673BB7]`}
              >
                Customers
              </Link>
            </li>
          </div>

          <div
            className={`flex items-center gap-6 pl-2 ${
              isActive("/stylists") ? "text-[#673BB7]" : "text-gray-600"
            }`}
          >
            <FaPeopleGroup
              className={`h-8 ${
                isActive("/stylists") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/stylists"
                className={`text-xs font-medium ${
                  isActive("/stylists") ? "text-[#673BB7]" : "text-gray-600"
                } hover:text-[#673BB7]`}
              >
                Stylists
              </Link>
            </li>
          </div>
          <div
            className={`flex items-center gap-6 pl-2 ${
              isActive("/schedule") ? "text-[#673BB7]" : "text-gray-600"
            }`}
          >
            <FaClockRotateLeft
              className={`h-8 ${
                isActive("/schedule") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/schedule"
                className={`text-xs font-medium ${
                  isActive("/schedule") ? "text-[#673BB7]" : "text-gray-600"
                } hover:text-[#673BB7]`}
              >
                Schedule
              </Link>
            </li>
          </div>
          <div
            className={`flex items-center gap-6 pl-2 ${
              isActive("/reservations") ? "text-[#673BB7]" : "text-gray-600"
            }`}
          >
            <FaCalendarDays
              className={`h-8 ${
                isActive("/reservations") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/reservations"
                className={`text-xs font-medium ${
                  isActive("/reservations") ? "text-[#673BB7]" : "text-gray-600"
                } hover:text-[#673BB7]`}
              >
                Reservations
              </Link>
            </li>
          </div>
          <div
            className={`flex items-center gap-6 pl-2 ${
              isActive("/settings") ? "text-[#673BB7]" : "text-gray-600"
            }`}
          >
            <FaUsersCog
              className={`h-8 ${
                isActive("/settings") ? "text-[#673BB7]" : "text-gray-600"
              }`}
            />
            <li>
              <Link
                href="/settings"
                className={`text-xs font-medium ${
                  isActive("/settings") ? "text-[#673BB7]" : "text-gray-600"
                } hover:text-[#673BB7]`}
              >
                Settings
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
