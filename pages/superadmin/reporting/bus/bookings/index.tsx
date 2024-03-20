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
    title: "Start Location",
    dataIndex: "checkin",
    key: "checkin",
  },
  {
    title: "Destination",
    dataIndex: "checkin",
    key: "checkin",
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

function BusBookings() {
  return (
    <SuperadminLayout title="Bus Trip Statistics">
      <div>
        <div className="mb-4 flex gap-5">
          <Select
            placeholder="Please choose a bus org"
            className="w-[250px]"
            size="large"
            options={[
              { label: "Agni", value: 1 },
              { label: "Blue Heave", value: 1 },
              { label: "Green Lander", value: 1 },
              { label: "Blueliner", value: 1 },
            ]}
          />
          <RangePicker size="large" format={"YYYY-MM-DD"} />
        </div>
        <Table pagination={false} columns={columns} dataSource={[]} />
      </div>
    </SuperadminLayout>
  );
}

export default BusBookings;
