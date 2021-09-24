import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
  return (
    <div className="chart">
      {props.chartData.map((dataItem) => (
        <ChartBar
          key = {dataItem.label}
          value={dataItem.value}
          label={dataItem.label}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
