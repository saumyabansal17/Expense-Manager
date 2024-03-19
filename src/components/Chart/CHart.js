import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log(props);
  const dataPointValues =props.datapoints.map((datapoint)=> datapoint.value);
  const totalmaximum=Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalmaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
