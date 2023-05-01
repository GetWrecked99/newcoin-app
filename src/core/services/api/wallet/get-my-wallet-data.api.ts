const getMyWalletData = async () => {
  const reqToMockApi = await fetch(
    "https://6442ddd376540ce225974cbb.mockapi.io/my-wallet",
    {
      cache: "no-store",
    }
  );
  const resForMockApi = await reqToMockApi.json();
  return resForMockApi;
};

export { getMyWalletData };
