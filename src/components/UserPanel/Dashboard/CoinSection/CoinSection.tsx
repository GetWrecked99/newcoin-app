"use client";

import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CoinCard } from "./CoinCard/CoinCard";

import { coinDataType } from "@core/types/crypto-types/crypto.types";

interface Props {
  data: coinDataType[];
}

const CoinSection: FC<Props> = ({ data }): JSX.Element => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className="w-full" {...sliderSettings}>
      {data.slice(0, 5).map((item, index) => (
        <div key={index} dir="rtl" className="px-3 py-6">
          <CoinCard data={item} />
        </div>
      ))}
    </Slider>
  );
};

export { CoinSection };
