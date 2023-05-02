import { marketExchangeChartType } from "@core/types/crypto-types/crypto.types";

const exchangeVolumeHourtoWeek = (
  data: marketExchangeChartType[]
): number[] => {
  const simpled = data.map((item) => parseFloat(item[1]));
  return priceHourToWeek(simpled);
};

const priceHourToWeek = (data: number[]): number[] => {
  const average = [];
  for (let i = 0; i < 7; i++) {
    let daySum = 0;
    for (let j = 0; j < 24; j++) {
      const index = i * 24 + j;
      daySum += data[index];
    }
    average.push(daySum / 24);
  }
  return average;
};

export { exchangeVolumeHourtoWeek, priceHourToWeek };
