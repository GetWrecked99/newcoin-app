import { FC } from "react";

import { PieChart } from "@components/UserPanel/Dashboard/Charts/AreaChart/PieChart";

import { WalletDataType } from "@core/types/mock-types/mock.types";
import {
  getLabelsForPieChart,
  getPercentageForPieChart,
} from "@core/utils/wallet/wallet.utils";

interface Props {
  walletData: WalletDataType[];
}

const MyWallet: FC<Props> = ({ walletData }): JSX.Element => {
  const chartColor = ["#f7931a", "#7eb6f7", "#2e2e2e"];
  const coinsPercentage = getPercentageForPieChart(walletData);

  const renderLabels = () => {
    return walletData.map((coin, index) => (
      <div
        key={index}
        className="flex flex-row flex-grow gap-x-3 items-center justify-start"
      >
        <span
          className="w-2 h-2 rounded-full mb-0.5"
          style={{ backgroundColor: chartColor[index] }}
        ></span>
        <span className="text-base 2xl:text-lg font-bold text-black mt-1">
          {coin.coinName}
        </span>
        <span className="text-xs 2xl:text-sm font-bold text-[#AEAEAE]">
          {` ${coinsPercentage[index].toFixed(1)} درصد`}
        </span>
      </div>
    ));
  };

  return (
    <>
      <div className="w-[40%] h-full flex flex-col">
        <h2 className="text-base 2xl:text-lg font-bold text-black mb-6">
          دارایی های کیف پول
        </h2>
        {renderLabels()}
      </div>
      <div className="w-[60%] h-full">
        <PieChart
          labels={getLabelsForPieChart(walletData)}
          counts={coinsPercentage}
          colors={chartColor}
        />
      </div>
    </>
  );
};

export { MyWallet };
