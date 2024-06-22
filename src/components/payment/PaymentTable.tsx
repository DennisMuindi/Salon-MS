import React from "react";

export default function PayTable() {
  // Sample data
  const transactions = [
    {
      id: 1,
      transId: "TXN001",
      time: "2024-06-20 14:30",
      name: "John Doe",
      telephone: "0701234567",
      amount: "KES 1,000",
    },
    {
      id: 2,
      transId: "TXN002",
      time: "2024-06-20 15:00",
      name: "Jane Smith",
      telephone: "0701234568",
      amount: "KES 2,500",
    },
    {
      id: 3,
      transId: "TXN003",
      time: "2024-06-21 10:00",
      name: "Emma Johnson",
      telephone: "0701234569",
      amount: "KES 3,000",
    },
    {
      id: 4,
      transId: "TXN004",
      time: "2024-06-21 11:15",
      name: "Chris Martin",
      telephone: "0701234570",
      amount: "KES 500",
    },
    {
      id: 5,
      transId: "TXN005",
      time: "2024-06-21 12:45",
      name: "Rhoda Mutuku",
      telephone: "0701234571",
      amount: "KES 4,200",
    },
    {
      id: 6,
      transId: "TXN006",
      time: "2024-06-22 09:30",
      name: "John Doe",
      telephone: "0701234572",
      amount: "KES 1,700",
    },
    {
      id: 7,
      transId: "TXN007",
      time: "2024-06-22 11:00",
      name: "Emma Johnson",
      telephone: "0701234573",
      amount: "KES 2,300",
    },
    {
      id: 8,
      transId: "TXN008",
      time: "2024-06-22 14:00",
      name: "John Doe",
      telephone: "0701234574",
      amount: "KES 800",
    },
    {
      id: 9,
      transId: "TXN009",
      time: "2024-06-22 15:30",
      name: "Jane Smith",
      telephone: "0701234575",
      amount: "KES 1,200",
    },
  ];

  return (
    <div className="ml-20 my-5 w-[80%]">
      <div className="flex items-center justify-between">
        <img src="/mpesa.png" alt="" className="h-10" />
        <h2 className="text-[#39B54A] font-semibold text-sm">
          Paybill:{" "}
          <span className="text-black font-semibold text-sm">123456</span>
        </h2>
        <h2 className="text-[#39B54A] font-semibold text-sm">
          Current Balance:{" "}
          <span className="text-black font-semibold text-sm">KES.500,000</span>
        </h2>
        <input
          type="text"
          placeholder="Search Payment Details"
          className="outline-none text-left py-2 px-5 text-xs rounded-lg bg-[#ECECEC] border border-gray-400 "
        />
        <div className="bg-[#39B54A] flex items-center py-2 px-4 gap-2 rounded-lg">
          <button className="text-white font-semibold text-sm">Search</button>
        </div>
      </div>

      {/* Table headers */}
      <div className="flex w-full mt-7 sticky top-0 z-10">
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          #
        </div>
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          Trans.ID
        </div>
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          Time
        </div>
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          Customer Name
        </div>
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          Tel.Number
        </div>
        <div className="flex-1 p-2 text-black text-sm font-semibold text-left">
          Amount
        </div>
      </div>

      {/* Table rows */}
      <div className="max-h-[400px] overflow-y-scroll">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className={`flex w-full ${
              index % 1 === 0 ? " bg-[#fcf8f8]" : " bg-white"
            } my-2 py-2 rounded-sm`}
          >
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.id}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.transId}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.time}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.name}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.telephone}
            </div>
            <div className="flex-1 p-2 text-[#454545] text-sm font-semibold text-left">
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
