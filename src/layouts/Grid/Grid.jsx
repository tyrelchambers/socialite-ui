import React from "react";
import styled from "styled-components";

const StyledGrid = styled.section`
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const Grid = (props) => {
  return (
    <StyledGrid
      className={`grid w-full gap-4 ${props.className ? props.className : ""}`}
    >
      {props.children}
    </StyledGrid>
  );
};

export default Grid;
