import { FC } from "react";

import { BarChart } from "../Charts/BarChart/‌BarChart";

import { exchangeVolumeHourtoWeek } from "@core/utils/chart-data/transaction.utils";
import { marketExchangeChartType } from "@core/types/crypto-types/crypto.types";

interface Props {
  transactionData: marketExchangeChartType[];
}

const Transaction: FC<Props> = ({ transactionData }): JSX.Element => {
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <h3 className="block w-full text-base 2xl:text-lg font-bold text-black">
        ارزش معاملات هفته گذشته (btc)
      </h3>
      <div className="block w-full min-h-[200px]">
        <BarChart data={exchangeVolumeHourtoWeek(transactionData)} />
      </div>
    </div>
  );
};

export { Transaction };
