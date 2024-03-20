import SuperadminLayout from "@/components/layout/superadmin";
import { DatePicker } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const { RangePicker } = DatePicker;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Top Bookings for the Date",
    },
  },
};

function HotelStatistics() {
  return (
    <SuperadminLayout title="Hotel Statistics">
      <div>
        <RangePicker />
        <div className="h-[500px] !w-full">
          <Bar
            // width={170}
            // height={170}
            options={options1}
            data={{
              labels: [
                "Shakesbirre",
                "Hotel Pirana",
                "Marriot",
                "Hotel Pirana",
                "Marriot",
              ],
              datasets: [
                {
                  // id: 1,
                  label: "",
                  data: [5, 6, 7, 10, 8, 15],
                  backgroundColor: "#3bad3d",
                },
              ],
            }}
          />
        </div>
      </div>
    </SuperadminLayout>
  );
}

export default HotelStatistics;
