const getTransactionTotalValues = (data: number[][]): number[] => {
  let totalValueNumber: number[] = [];
  data.slice(-10).forEach((index) => {
    const percentageOfValues = Number(
      ((Math.max(index[1]) / index[0]) * 100).toFixed(4)
    );
    totalValueNumber.push(percentageOfValues);
  });
  return totalValueNumber;
};

export { getTransactionTotalValues };
