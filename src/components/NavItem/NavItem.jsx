import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  color: ${(props) =>
    props.active ? "var(--safety-yellow)" : "var(--inactive-gray)"};
`;

const StyledNavItem = styled.span`
  width: 100%;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.active ? "var(--lighter-black)" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: var(--lighter-black);
  }
`;

const NavItem = ({ active, icon, ...props }) => {
  return (
    <StyledNavItem
      active={active}
      className="flex items-center p-2 px-4 rounded-md"
      onClick={props.onClick}
    >
      <StyledIcon active={active}>
        <FontAwesomeIcon icon={icon} className="mr-4" />
      </StyledIcon>
      {props.children}
    </StyledNavItem>
  );
};

export default NavItem;
