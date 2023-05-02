import { FC } from "react";

import { PopularCards } from "@components/UserPanel/Dashboard/PopularCoins/PopularCards/PopularCards";

import { coinDataType } from "@core/types/crypto-types/crypto.types";

interface Props {
  popularCoinsData: coinDataType[];
}

const PopularCoins: FC<Props> = ({ popularCoinsData }: Props): JSX.Element => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-base font-bold text-black">محبوب‌ترین کوین‌ها</h2>
        <span className="text-xs font-bold text-[#B3B3B3]"> عرضه گردش</span>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-base font-bold text-black">نام</h2>
        <span>۲۴ ساعت گذشته</span>
      </div>
      <div className="flex flex-col gap-y-2">
        {popularCoinsData.map((item, index) => (
          <PopularCards data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export { PopularCoins };
