import { PopularCoinsType } from "@core/types/crypto-types/crypto.types";

const createIds = (data: PopularCoinsType): string => {
  let coinsId = "";
  data.coins.forEach((obj) => {
    coinsId += obj.item.id + ",";
  });
  return coinsId.replace(/.$/, "");
};

export { createIds };
