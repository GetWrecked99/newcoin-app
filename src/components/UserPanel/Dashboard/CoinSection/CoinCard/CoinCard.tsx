import { FC } from "react";
import Image from "next/image";

import { AreaChart } from "@components/UserPanel/Dashboard/Charts/AreaChart/AreaChart";

interface Props {
  /* the reason that is has impilicity any type is that the crypto object hasn't a valid format for declaring the data object. (it's flexible) */
  data: any;
}

const CoinCard: FC<Props> = ({ data }): JSX.Element => {
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
              (data.price_change_percentage_24h > 0
                ? "text-[#2AC479]"
                : "text-red-400")
            }
          >
            {data.price_change_percentage_24h} %
          </span>
          <span className="text-sm font-bold text-[#1E1E1E] line-clamp-1">
            {data.current_price} دلار
          </span>
        </div>
      </div>
      <div>{/* <AreaChart /> */}</div>
    </div>
  );
};

export { CoinCard };
