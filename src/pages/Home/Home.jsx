import React from "react";
import { useGetCurrentTab } from "../../hooks/useGetCurrentTab";
import Header from "../../layouts/Header/Header";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Wrapper from "../../layouts/Wrapper/Wrapper";
const Home = () => {
  const { currentTab } = useGetCurrentTab("for you");

  return (
    <div className="flex flex-col">
      <Header />

      <Wrapper className="mt-6">
        <Sidebar />
      </Wrapper>
    </div>
  );
};

export default Home;
