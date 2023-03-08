import React from "react";
import RequireAuth from "../hooks/RequireAuth";
import InventoryView from "../components/Page/Inventory/InventoryView/InventoryView";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

const InventoryViewPage = () => {
  const { id } = useParams();
  const [product, productLoading, refetch] = useFetch({
    api: "inventory",
    unique: id,
  });
  if (productLoading) {
    return <Loading />;
  }

  return (
    <RequireAuth>
      <Header />
      <InventoryView product={product} refetch={refetch} />
    </RequireAuth>
  );
};

export default InventoryViewPage;
