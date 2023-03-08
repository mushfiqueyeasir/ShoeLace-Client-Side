import React from "react";
import RequireAuth from "../hooks/RequireAuth";
import MyItems from "../components/Page/MyItems/MyItems";
import Header from "../components/Shared/Header/Header";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading/Loading";
import Footer from "../components/Shared/Footer/Footer";

const MyItemPage = ({ user }) => {
  const [inventories, inventoriesLoading] = useFetch({
    api: `inventory?email=${user.email}`,
    user: user,
  });
  if (inventoriesLoading) {
    return <Loading />;
  }

  return (
    <RequireAuth>
      <Header />
      <MyItems inventories={inventories} />
      <Footer />
    </RequireAuth>
  );
};

export default MyItemPage;
