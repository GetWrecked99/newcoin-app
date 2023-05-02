import { FC } from "react";
import Image from "next/image";

import { AreaChart } from "@components/UserPanel/Dashboard/Charts/AreaChart/AreaChart";

import { coinDataType } from "@core/types/crypto-types/crypto.types";
import { priceHourToWeek } from "@core/utils/chart-data/transaction.utils";

interface Props {
  data: coinDataType;
}

const CoinCard: FC<Props> = ({ data }): JSX.Element => {
  const weekPrice = data.sparkline_in_7d.price;
  const weeklyDelta = data.price_change_percentage_7d_in_currency;
  const weekAverage = priceHourToWeek(weekPrice);

  return (
    <div className="flex flex-col h-full p-4 bg-white rounded-2xl">
      <div className="flex w-full items-center justify-between gap-y-3">
        <div className="flex flex-row gap-x-3">
          <Image src={data.image} alt="" width={46} height={46} />
          <div className="flex flex-col gap-y-1">
            <span className="text-base font-bold text-black line-clamp-1">
              {data.name}
            </span>
            <span className="text-xs font-bold text-[#AEAEAE]">
              {data.symbol}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <span
            dir="ltr"
            className={
              "text-base font-bold line-clamp-1 " +
              (weeklyDelta > 0 ? "text-[#2AC479]" : "text-red-400")
            }
          >
            {weeklyDelta.toFixed(2)} %
          </span>
          <span className="text-sm font-bold text-[#1E1E1E] line-clamp-1">
            {data.current_price} دلار
          </span>
        </div>
      </div>
      <div>
        <AreaChart data={weekAverage} />
      </div>
    </div>
  );
};

export { CoinCard };
