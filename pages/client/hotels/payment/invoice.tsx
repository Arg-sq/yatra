import React from "react";

function Invoice() {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md border">
      <div className="bg-gray-100 px-4 py-2">
        <img
          className="m-auto my-2"
          src="/client/assets/img/YS-purple.svg"
          alt="logo"
          width="120px"
        />
        <h2 className="text-md font-bold text-gray-800">Hotel Marriot</h2>
      </div>
      <div className="px-4 py-4 sm:p-6">
        <div className="flex flex-col items-start justify-between mb-6">
          <span className="text-sm font-medium text-gray-600">Name</span>
          <span className="text-lg font-medium text-gray-800">John Doe</span>
        </div>
        <div className="flex flex-col items-start justify-between mb-6">
          <span className="text-sm font-medium text-gray-600">Room number</span>
          <span className="text-lg font-medium text-gray-800">12</span>
        </div>
        <div className="flex flex-row items-center justify-between mb-6">
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-gray-600">
              Booked For
            </span>
            <span className="text-lg font-medium text-gray-800">
              Oct 6, 2023
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-gray-600">Price</span>
            <span className="text-lg font-medium text-gray-800">NPR 7,500</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <small>Please bring this ticket during hotel visit</small>
      </div>
    </div>
  );
}

export default Invoice;
