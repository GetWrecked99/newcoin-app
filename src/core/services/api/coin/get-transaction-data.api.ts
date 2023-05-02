import { marketExchangeChartType } from "@core/types/crypto-types/crypto.types";

async function getExchangeVolumeData(): Promise<marketExchangeChartType[]> {
  const ExchangeVolumeReq = await fetch(
    "https://api.coingecko.com/api/v3/exchanges/binance/volume_chart?days=7"
  );
  const ExchangeVolumeJson = await ExchangeVolumeReq.json();
  return ExchangeVolumeJson;
}

export { getExchangeVolumeData };
