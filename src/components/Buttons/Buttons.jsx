import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-bold: 500;
  padding: 0.5em 1em;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  border-radius: 0.375rem;
`;

export const StyledMainButton = styled(StyledButton)`
  background-color: var(--safety-yellow);
  color: var(--raisin-black);

  &:disabled {
    background-color: var(--lighter-black);
    color: var(--gray);
    cursor: not-allowed;
  }
`;

const StyledSecButton = styled(StyledButton)`
  border: 2px solid var(--safety-yellow);
  color: var(--safety-yellow);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--safety-yellow);
    color: var(--raisin-black);
  }
`;

const StyledDangerButton = styled(StyledButton)``;

const mainButton = (props) => (
  <StyledMainButton
    type="button"
    className={`${props.className ?? ""}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </StyledMainButton>
);

const secButton = (props) => (
  <StyledSecButton
    type="button"
    className={`${props.className ?? ""}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </StyledSecButton>
);

const danger = (props) => (
  <StyledDangerButton
    type="button"
    className={`bg-red-400 ${props.className ?? ""}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </StyledDangerButton>
);

const Buttons = ({ variant, ...props }) => {
  if (variant === "danger") {
    return danger(props);
  }
  if (variant === "secondary") {
    return secButton(props);
  }
  return mainButton(props);
};

export default Buttons;
