"use client";

import React, { FC, useEffect, useState } from "react";

import { BaseChart } from "../AreaChart/BaseChart";

interface Props {
  data: number[];
}

const BarChart: FC<Props> = ({ data }): JSX.Element => {
  const [showChart, setShowChart] = useState(false);

  const min = Math.min(...data);
  const max = Math.max(...data);

  const options = {
    series: [
      {
        name: "Inflation",
        data,
      },
    ],
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
      formatter: function (val: number) {
        return Math.trunc(val);
      },
    },
    colors: ["#3a8bea"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 0.3,
        type: "vertical",
        stops: [0, 90, 100],
        gradientToColors: ["#3a8bea"],
      },
    },

    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 5,
      position: "back",

      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.7,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      min: min - (max - min) / 10,
      max: max,
      labels: {
        offsetX: -20,
        formatter: (value: number) => {
          return Math.trunc(value);
        },
      },
    },
  };

  const series = [
    {
      name: ["Binance exchanges"],
      data,
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window !== "undefined" && !showChart) setShowChart(true);
  });

  return showChart ? (
    <BaseChart
      type="bar"
      options={options}
      series={series}
      width={"100%"}
      height={"100%"}
    />
  ) : (
    <span>Loading. . .</span>
  );
};

export { BarChart };
