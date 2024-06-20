import SideBar from "@/components/SideBar";
import CustomerContent from "@/components/customer/CustomerContent";
import React from "react";

export default function customer() {
  return (
    <div className="w-full bg-[#f0f5f7] h-screen flex items-center justify-between">
      <SideBar />
      <CustomerContent />
    </div>
  );
}
