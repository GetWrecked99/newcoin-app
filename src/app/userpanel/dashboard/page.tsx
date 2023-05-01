import { use } from "react";

import { TradingViewWidget } from "@components/UserPanel/Dashboard/Charts/CandleChart/CandleChart";
import { Transaction } from "@components/UserPanel/Dashboard/Transaction/Transaction";
import { PopularCoins } from "@components/UserPanel/Dashboard/PopularCoins/PopularCoins";
import { MyWallet } from "@components/UserPanel/Dashboard/MyWallet/MyWallet";
import { CoinSection } from "@components/UserPanel/Dashboard/CoinSection/CoinSection";

import PopularCoinsData from "@core/data/fake-data/popular-coins.data.json";
import TransactionData from "@core/data/fake-data/transaction.data.json";
import { WalletDataType } from "@core/types/mock-types/mock.types";
import { getMyWalletData } from "@core/services/api/wallet/get-my-wallet-data.api";

/* 
 async function getPopularCoinsData() {
  const reqToTrendingCoins = await fetch(
    "https://api.coingecko.com/api/v3/search/trending",
    {
      cache: "no-store",
    }
  );

  const resForTrendingCoins: PopularCoinsType = await reqToTrendingCoins.json();
  const formattedString = createIds(resForTrendingCoins);

  const reqToMarketCoins = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${formattedString}&order=market_cap_asc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`,
    {
      cache: "no-store",
    }
  );

  const resForToMarketCoins = await reqToMarketCoins.json();

  return resForToMarketCoins;
} 
*/

export default function Dashboard(): JSX.Element {
  // const popularCoinsData = use(getPopularCoinsData());
  const popularCoinsData: WalletDataType[] = use(getMyWalletData());

  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="flex justify-center w-full">
        <div className="w-full">
          <CoinSection data={PopularCoinsData} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-4 2xl:col-span-3 grid grid-cols-2 gap-5">
          <div className="col-span-2 lg:col-span-1 p-4 bg-white rounded-2xl flex flex-row gap-x-4 items-center">
            <MyWallet walletData={popularCoinsData} />
          </div>
          <div className="col-span-2 lg:col-span-1 p-4 pl-0 bg-white rounded-2xl">
            <Transaction transactionData={TransactionData} />
          </div>
          <div className="col-span-2 p-4 bg-white rounded-2xl h-[500px]">
            <TradingViewWidget />
          </div>
        </div>
        <div className="col-span-4 2xl:col-span-1 flex flex-col p-4 bg-white rounded-2xl gap-y-4">
          <PopularCoins popularCoinsData={PopularCoinsData} />
        </div>
      </div>
    </div>
  );
}
