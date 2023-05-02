import { coinDataType } from "@core/types/crypto-types/crypto.types";

async function getPopularCoinsData(): Promise<coinDataType[]> {
  const poppularCoinDataReq = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=24h%2C7d&locale=en"
  );
  const poppularCoinDataJson = await poppularCoinDataReq.json();
  return poppularCoinDataJson;
}

export { getPopularCoinsData };
