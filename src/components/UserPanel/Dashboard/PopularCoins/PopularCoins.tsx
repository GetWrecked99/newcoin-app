import { FC } from "react";
import PopularCards from "./PopularCards/PopularCards";

interface Props {
  /* the reason that is has impilicity any type is that the crypto object hasn't a valid format for declaring the data object. (it's flexible) */
  popularCoinsData: any[];
}

const PopularCoins: FC<Props> = ({ popularCoinsData }: Props): JSX.Element => {
  const renderData = () => {
    const sortedItems = popularCoinsData.sort(
      (a: any, b: any) => b.circulating_supply - a.circulating_supply
    );
    return sortedItems.map((item, index) => (
      <PopularCards data={item} key={index} />
    ));
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-base font-bold text-black">محبوب‌ترین کوین‌ها</h2>
        <span className="text-xs font-bold text-[#B3B3B3]">
          مرتب بر اساس عرضه گردش
        </span>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <h2 className="text-base font-bold text-black">نام</h2>
        <span>۲۴ ساعت گذشته</span>
      </div>
      <div className="flex flex-col gap-y-2">{renderData()}</div>
    </>
  );
};

export { PopularCoins };
