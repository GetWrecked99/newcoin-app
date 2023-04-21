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
  const renderLabels = () => {
    return walletData.map((coin, index) => (
      <div
        key={index}
        className="flex flex-row flex-grow gap-x-3 items-center justify-start"
      >
        <span className="w-2 h-2 rounded-full bg-[#2E2E2E] mb-0.5"></span>
        <span className="text-base font-bold text-black mt-1">
          {coin.coinName}
        </span>
      </div>
    ));
  };

  return (
    <>
      <div className="w-1/3 h-full flex flex-col">
        <h2 className="text-base font-bold text-black mb-6">
          دارایی های کیف پول
        </h2>
        {renderLabels()}
      </div>
      <div className="w-2/3 h-full">
        <PieChart
          labels={getLabelsForPieChart(walletData)}
          counts={getPercentageForPieChart(walletData)}
        />
      </div>
    </>
  );
};

export { MyWallet };
