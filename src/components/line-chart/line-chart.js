import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
import { useHistory } from "react-router-dom";
const LineChart = ({ chartdata }) => {
  const history = useHistory();
  return (
    <Line
      data={chartdata}
      options={{
        onClick: (_, element) => {
          history.push(
            `/details/${element[0].datasetIndex}/${element[0].index}`
          );
        },
      }}
    />
  );
};
export default LineChart;
