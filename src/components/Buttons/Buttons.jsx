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

const mainButton = ({ className, onClick, disabled, children, ...rest }) => (
  <StyledMainButton
    type="button"
    className={`${className ?? ""}`}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </StyledMainButton>
);

const secButton = ({ className, onClick, disabled, children, ...rest }) => (
  <StyledSecButton
    type="button"
    className={`${className ?? ""}`}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
  </StyledSecButton>
);

const danger = ({ className, onClick, disabled, children, ...rest }) => (
  <StyledDangerButton
    type="button"
    className={`bg-red-400 ${className ?? ""}`}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {children}
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
