import React from "react";
import styled from "styled-components";

const StyledMainButton = styled.button`
  background-color: var(--safety-yellow);
  color: var(--raisin-black);
  font-bold: 500;
`;

const mainButton = (props) => (
  <StyledMainButton
    type="button"
    className={`px-4 py-2 rounded-lg text-sm ${props.className ?? ""}`}
    onClick={props.onClick}
  >
    {props.children}
  </StyledMainButton>
);

const Buttons = ({ variant, ...props }) => {
  return mainButton(props);
};

export default Buttons;
