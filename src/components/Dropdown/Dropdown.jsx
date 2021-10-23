import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  top: 2em;
  width: 100%;
  background-color: var(--lighter-black);
  z-index: 20;
`;

const Dropdown = ({ options, isOpen }) => {
  if (!isOpen) return null;

  return <StyledDropdown>hey</StyledDropdown>;
};

export default Dropdown;
