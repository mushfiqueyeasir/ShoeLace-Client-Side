import React from "react";
import RequireAuth from "../hooks/RequireAuth";
import Header from "../components/Shared/Header/Header";
import AddItem from "../components/Page/AddItem/AddItem";

const AddItemPage = ({ user }) => {
  return (
    <RequireAuth>
      <Header />
      <AddItem user={user} />
    </RequireAuth>
  );
};

export default AddItemPage;
