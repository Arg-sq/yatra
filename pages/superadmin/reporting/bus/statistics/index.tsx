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
      text: "Top Trips for the Date",
    },
  },
};

function BusStatistics() {
  return (
    <SuperadminLayout title="Bus Statistics">
      <div>
        <RangePicker />
        <div className="h-[500px] !w-full">
          <Bar
            // width={170}
            // height={170}
            options={options1}
            data={{
              labels: ["Agni", "Blue Heaven", "Green Lander", "Blueliner"],
              datasets: [
                {
                  // id: 1,
                  label: "",
                  data: [5, 6, 7, 15],
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

export default BusStatistics;
