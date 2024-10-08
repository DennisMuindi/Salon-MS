import MainContent from "@/components/MainContent";
import SideBar from "@/components/SideBar";
import React from "react";

export default function dashboard() {
  return (
    <div className="w-full bg-[#f0f5f7] h-screen flex items-center justify-between">
      <SideBar />
      <MainContent />
    </div>
  );
}
