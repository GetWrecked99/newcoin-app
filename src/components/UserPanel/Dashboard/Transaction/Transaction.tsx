import { FC } from "react";
import { BarChart } from "../Charts/BarChart/‌BarChart";

import { getTransactionTotalValues } from "@core/utils/chart-data/transaction.utils";

interface Props {
  transactionData: {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
  };
}

const Transaction: FC<Props> = ({ transactionData }): JSX.Element => {
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <h3 className="block w-full text-base font-bold text-black">
        ارزش معاملات هفته گذشته
      </h3>
      <div className="block w-full min-h-[200px]">
        <BarChart
          data={getTransactionTotalValues(transactionData.total_volumes)}
        />
      </div>
    </div>
  );
};

export { Transaction };
