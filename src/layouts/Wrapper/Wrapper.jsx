import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.section`
  max-width: ${(props) => (props.narrow ? "1280px" : "2000px")};
`;

const Wrapper = (props) => {
  return (
    <StyledWrapper
      className={`p-4  ml-auto mr-auto w-full ${props.className ?? ""}`}
      narrow={props.narrow}
    >
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;
