import { FC } from "react";
import Image from "next/image";

import { coinDataType } from "@core/types/crypto-types/crypto.types";

interface Props {
  data: coinDataType;
}

const PopularCards: FC<Props> = ({ data }): JSX.Element => {
  const dailyPercentage = data.price_change_percentage_24h_in_currency;

  return (
    <div className="w-full flex flex-row items-center justify-between border-b-2 py-4">
      <div className="flex flex-row items-center gap-x-2">
        <figure className="flex flex-row gap-x-3">
          <Image src={data.image} alt="" width={24} height={24} />
        </figure>
        <span className="text-sm font-bold text-black line-clamp-1">
          {data.name}
        </span>
        <span className="text-xs font-bold text-[#B3B3B3]">{data.symbol}</span>
      </div>
      <span
        dir="ltr"
        className={
          "text-sm font-bold " +
          (dailyPercentage > 0 ? "text-[#2AC479]" : "text-red-400")
        }
      >
        {dailyPercentage.toFixed(2)} %
      </span>
    </div>
  );
};

export { PopularCards };
