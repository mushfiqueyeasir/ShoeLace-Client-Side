import React from "react";
import UserAuth from "../hooks/UserAuth";
import Join from "../components/Page/Join/Join";
import Header from "../components/Shared/Header/Header";

const JoinPage = () => {
  return (
    <UserAuth>
      <Header />
      <Join />
    </UserAuth>
  );
};

export default JoinPage;
