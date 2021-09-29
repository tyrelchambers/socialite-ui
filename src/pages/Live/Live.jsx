import React from "react";
import LiveView from "../../components/LiveView/LiveView";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Live = () => {
  return (
    <>
      <Header />

      <Wrapper className="mt-10">
        <LiveView />
      </Wrapper>
    </>
  );
};

export default Live;
