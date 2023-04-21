import Image from "next/image";
import { FC } from "react";

interface Props {
  /* the reason that is has impilicity any type is that the crypto object hasn't a valid format for declaring the data object. (it's flexible) */
  data: any;
}

const PopularCards: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="w-full flex flex-row items-center justify-between border-b-2 py-4">
      <div className="flex flex-row items-center gap-x-2">
        <figure className="flex flex-row gap-x-3">
          <Image src={data.image} alt="" width={24} height={24} />
        </figure>
        <span className="text-sm font-bold text-black">{data.name}</span>
        <span className="text-xs font-bold text-[#B3B3B3]">{data.symbol}</span>
      </div>
      <span
        dir="ltr"
        className={
          "text-sm font-bold " +
          (data.price_change_percentage_24h > 0
            ? "text-[#2AC479]"
            : "text-red-400")
        }
      >
        {data.price_change_percentage_24h} %
      </span>
    </div>
  );
};

export default PopularCards;
