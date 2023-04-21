"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface chartI {
  type:
    | "area"
    | "line"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";
  options?: any;
  series?: any;
  width?: string | number;
  height?: string | number;
}

const BaseChart: FC<chartI> = ({
  type,
  options,
  series,
  width,
  height,
}): JSX.Element => {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={"100%"}
    />
  );
};

export { BaseChart };
