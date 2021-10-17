import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  max-width: 2000px;
`;

const Wrapper = (props) => {
  return (
    <StyledWrapper
      className={`p-4  ml-auto mr-auto w-full ${props.className ?? ""}`}
    >
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;
