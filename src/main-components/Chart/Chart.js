import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const valueArray = props.chartData.map(dataItem => dataItem.value);
  const maximumValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.chartData.map((dataItem) => (
        <ChartBar
          key={dataItem.label}
          value={dataItem.value}
          label={dataItem.label}
          maxValue={maximumValue}
        />
      ))
      }
    </div>
  );
};

export default Chart;
