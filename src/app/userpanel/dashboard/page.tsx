import { TradingViewWidget } from "@components/UserPanel/Dashboard/Charts/CandleChart/CandleChart";
import { Transaction } from "@components/UserPanel/Dashboard/Transaction/Transaction";
import { PopularCoins } from "@components/UserPanel/Dashboard/PopularCoins/PopularCoins";
import { MyWallet } from "@components/UserPanel/Dashboard/MyWallet/MyWallet";
import { CoinSection } from "@components/UserPanel/Dashboard/CoinSection/CoinSection";

import { getMyWalletData } from "@core/services/api/wallet/get-my-wallet-data.api";
import { getPopularCoinsData } from "@core/services/api/coin/get-popular-coins-data.api";
import { getExchangeVolumeData } from "@core/services/api/coin/get-transaction-data.api";

export const revalidate = 10; /* revalidate this page every 10 seconds */

export default async function Dashboard(): Promise<JSX.Element> {
  const popularCoinsData = await getPopularCoinsData();
  const ExchangeVolume = await getExchangeVolumeData();
  const myWalletData = await getMyWalletData();

  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="flex justify-center w-full">
        <div className="w-full">
          <CoinSection data={popularCoinsData} />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-4 xl:col-span-3 grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1 p-4 md:pl-0 2xl:pl-4 bg-white rounded-2xl flex flex-col">
            <MyWallet walletData={myWalletData} />
          </div>
          <div className="col-span-2 md:col-span-1 p-4 pl-0 bg-white rounded-2xl">
            <Transaction transactionData={ExchangeVolume} />
          </div>
          <div className="col-span-2 p-4 bg-white rounded-2xl h-[500px]">
            <TradingViewWidget />
          </div>
        </div>
        <div className="col-span-4 xl:col-span-1 flex flex-col p-4 bg-white rounded-2xl gap-y-4">
          <PopularCoins popularCoinsData={popularCoinsData} />
        </div>
      </div>
    </div>
  );
}
