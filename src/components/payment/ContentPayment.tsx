import React from "react";
import PayTable from "./PaymentTable";

export default function PaymentContent() {
  return (
    <div
      className="ml-[15%] w-[85%] bg-white h-screen overflow-x-hidden inset-0 bg-[url(/bg-image.png)] bg-contain bg-center bg-no-repeat"
      style={{ scrollBehavior: "smooth", backgroundSize: "35%" }}
    >
      <div className="flex items-center justify-between mx-20 mt-20 mb-7">
        <h2 className="text-gray-600 font-medium">Payments</h2>
      </div>
      <PayTable />
    </div>
  );
}
