import React from "react";
import Loading from "../components/Loading/Loading";
import InventoryBody from "../components/Page/Inventory/InventoryBody/InventoryBody";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";

const InventoryPage = () => {
  const [inventories, inventoriesLoading] = useFetch({ api: "inventory" });
  if (inventoriesLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <InventoryBody inventories={inventories} navigation="inventory" />
    </div>
  );
};

export default InventoryPage;
