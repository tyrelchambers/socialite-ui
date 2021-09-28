import React from "react";
import styled from "styled-components";

export const StyledMainButton = styled.button`
  background-color: var(--safety-yellow);
  color: var(--raisin-black);
  font-bold: 500;
  padding: 0.5em 1em;
  border-radius: 0.5rem;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
`;

const mainButton = (props) => (
  <StyledMainButton
    type="button"
    className={` ${props.className ?? ""}`}
    onClick={props.onClick}
  >
    {props.children}
  </StyledMainButton>
);

const Buttons = ({ variant, ...props }) => {
  return mainButton(props);
};

export default Buttons;
