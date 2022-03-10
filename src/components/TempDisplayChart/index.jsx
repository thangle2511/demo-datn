import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const getData = (dataCurrent) => {
  return [
    ["Label", "Value"],
    ["Temperature", dataCurrent],
  ];
};

const options = {
  min: -20,
  max: 40,
  width: 400,
  height: 170,
  redFrom: 30,
  redTo: 40,
  yellowFrom: 20,
  yellowTo: 30,
  minorTicks: 5,
};

const TempDisplayChart = ({ currentData }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (currentData.temp !== null) {
      setData(getData(currentData.temp));
    } else {
      setData(getData(0));
    }
  }, [currentData]);

  return (
    <Chart
      chartType="Gauge"
      width="100px"
      height="100px"
      data={data}
      options={options}
    />
  );
};

export default TempDisplayChart;
