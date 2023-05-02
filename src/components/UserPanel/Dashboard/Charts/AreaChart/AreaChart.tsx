"use client";

import React, { FC, useEffect, useState } from "react";

import { BaseChart } from "./BaseChart";

interface Props {
  data: number[];
  weeklyDelta: number;
}

const AreaChart: FC<Props> = ({ data, weeklyDelta }) => {
  const [showChart, setShowChart] = useState(false);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      lineCap: "butt",
      colors: weeklyDelta >= 0 ? ["#2ac479"] : ["#c42a44"],
      width: 3,
    },
    colors: weeklyDelta >= 0 ? ["#99e2bf", "#f6fcf9"] : ["#e299ab", "#fcf6f7"],
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      size: 6,
      strokeColors: weeklyDelta >= 0 ? "#2ac479" : ["#c42a44"],
      colors: "#fff",
      strokeWidth: 3,
    },
  };
  const series = [
    {
      name: "series2",
      data: data,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== "undefined" && !showChart) setShowChart(true);
  });

  return showChart ? (
    <BaseChart
      type="area"
      options={options}
      series={series}
      width={"100%"}
      height={"100%"}
    />
  ) : (
    <span>Loading. . .</span>
  );
};

export { AreaChart };
