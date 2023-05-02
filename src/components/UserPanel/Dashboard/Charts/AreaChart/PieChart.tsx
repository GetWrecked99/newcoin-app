"use client";

import React, { FC, useEffect, useState } from "react";

import { BaseChart } from "./BaseChart";

interface Props {
  labels: string[];
  counts: number[];
  colors: string[];
}

const PieChart: FC<Props> = ({ labels, counts, colors }): JSX.Element => {
  const [showChart, setShowChart] = useState(false);

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    colors,
    labels: labels,
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },

    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
        var label = opts.w.globals.labels[opts.seriesIndex];
        return label;
      },

      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        colors: ["#fff"],
      },
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== "undefined" && !showChart) setShowChart(true);
  });

  return showChart ? (
    <BaseChart
      type="pie"
      options={options}
      series={counts}
      width={"100%"}
      height={"100%"}
    />
  ) : (
    <span>Loading. . .</span>
  );
};

export { PieChart };
