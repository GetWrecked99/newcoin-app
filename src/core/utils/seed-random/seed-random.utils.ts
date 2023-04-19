import seedRandome from "seedrandom";

export const getSeedRandom = (seedValue: string, countOfNumber?: number) => {
  const random = seedRandome(seedValue);
  let result = random();
  if (countOfNumber) {
    countOfNumber = Math.max(Math.abs(Math.round(countOfNumber)), 1);

    result *= Math.pow(10, countOfNumber) * (result < 0.1 ? 10 : 1);
    result = Math.round(result);
  }
  return result;
};
