import React from "react";
import styled from "styled-components";

const StyledBlock = styled.section``;

const Block = (props) => {
  return (
    <StyledBlock className={props.className ? props.className : ""}>
      {props.children}
    </StyledBlock>
  );
};

export default Block;
