import React from "react";
import RequireAuth from "../hooks/RequireAuth";
import ManageInventory from "../components/Page/ManageInventory/ManageInventory";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading/Loading";

const ManageInventoryPage = () => {
  const [inventories, inventoriesLoading, refetch] = useFetch({
    api: "inventory",
  });
  if (inventoriesLoading) {
    return <Loading />;
  }
  return (
    <RequireAuth>
      <Header />
      <ManageInventory inventories={inventories} refetch={refetch} />
    </RequireAuth>
  );
};

export default ManageInventoryPage;
