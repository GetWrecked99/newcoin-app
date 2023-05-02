"use client";

import React, { FC, useEffect, useState } from "react";

import { BaseChart } from "./BaseChart";

interface Props {
  data: number[];
}

const AreaChart: FC<Props> = ({ data }) => {
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
      colors: ["#2ac479"],
      width: 3,
    },
    colors: ["#99e2bf", "#f6fcf9"],
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
      strokeColors: "#2ac479",
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
