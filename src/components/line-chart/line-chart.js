import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
const LineChart = ({ chartdata }) => {
  return (
    <Line
      data={chartdata}
    
    />
  );
};
export default LineChart;
