import React from "react";
import Loading from "../components/Loading/Loading";

import AboutArticle from "../components/Page/Home/AboutArticle/AboutArticle";
import Banner from "../components/Page/Home/Banner/Banner";
import PromoArticle from "../components/Page/Home/PromoArticle/PromoArticle";
import InventoryBody from "../components/Page/Inventory/InventoryBody/InventoryBody";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const [inventories, inventoriesLoading] = useFetch({ api: "inventory" });
  if (inventoriesLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <Banner />
      <AboutArticle />
      <InventoryBody inventories={inventories.slice(0, 3)} navigation="home" />
      <PromoArticle />
      <Footer />
    </div>
  );
};

export default HomePage;
