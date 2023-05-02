import { WalletDataType } from "@core/types/mock-types/mock.types";

const getMyWalletData = async (): Promise<WalletDataType[]> => {
  const reqToMockApi = await fetch(
    "https://6442ddd376540ce225974cbb.mockapi.io/my-wallet"
  );
  const resForMockApi = await reqToMockApi.json();
  return resForMockApi;
};

export { getMyWalletData };
