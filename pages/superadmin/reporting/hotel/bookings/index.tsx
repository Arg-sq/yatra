import SuperadminLayout from "@/components/layout/superadmin";
import { DatePicker, Select, Table } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  // {
  //   title: "Phone",
  //   dataIndex: "phone",
  //   key: "phone",
  // },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Total Price",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Total People",
    dataIndex: "totalpeople",
    key: "totalpeople",
  },
  {
    title: "Checkin",
    dataIndex: "checkin",
    key: "checkin",
  },
  {
    title: "Checkout",
    dataIndex: "checkout",
    key: "checkout",
  },
];

function HotelBookings() {
  return (
    <SuperadminLayout title="Hotel Statistics">
      <div>
        <div className="mb-4 flex gap-5">
          <Select
            placeholder="Please choose a hotel"
            className="w-[250px]"
            size="large"
            options={[
              { label: "Marriot", value: 1 },
              { label: "Shangri la", value: 1 },
              { label: "Raddision", value: 1 },
              { label: "Last Friday", value: 1 },
            ]}
          />
          <RangePicker size="large" format={"YYYY-MM-DD"} />
        </div>
        <Table pagination={false} columns={columns} dataSource={[]} />
      </div>
    </SuperadminLayout>
  );
}

export default HotelBookings;
