import { WalletDataType } from "@core/types/mock-types/mock.types";

const getCurrentWalletBalance = (walletData: WalletDataType[]) => {
  let balance: number[] = [];
  walletData.forEach((coin) => {
    balance.push(coin.currentValue);
  });
  return balance;
};

const getPercentageForPieChart = (walletData: WalletDataType[]) => {
  const walletBalance = getCurrentWalletBalance(walletData);
  let percentage: number[] = [];

  const totalBalance = walletBalance.reduce(
    (prev, current) => prev + current,
    0
  );
  walletBalance.forEach((num) => {
    percentage.push((num / totalBalance) * 100);
  });
  return percentage;
};

const getLabelsForPieChart = (walletData: WalletDataType[]) => {
  let labels: string[] = [];
  walletData.forEach((coin) => {
    labels.push(coin.coinName);
  });
  return labels;
};

export { getPercentageForPieChart, getLabelsForPieChart };
