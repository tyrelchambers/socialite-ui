import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--lighter-black);
  color: var(--white);
  padding: 0.5em 1.5em;
  border-radius: 999px;
`;

export const LiveControl = ({
  label,
  disabled,
  onClick,
  icon,
  className,
  menuItems,
  onMenuItemClick,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = (item) => {
    if (onMenuItemClick) {
      onMenuItemClick(item);
    }
    setMenuVisible(false);
  };

  let menuTrigger;
  let menu = <div />;
  if (menuItems && menuItems.length > 0) {
    menuTrigger = (
      <button
        disabled={disabled}
        className={``}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <div />
        <FontAwesomeIcon height={32} icon={faChevronDown} />
      </button>
    );

    menu = (
      <div>
        <ul>
          {menuItems?.map((item, i) => {
            return (
              <li key={i} onClick={() => handleMenuClick(item)}>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <Popover isOpen={menuVisible} positions={["top"]} content={menu}>
      <div>
        <StyledButton disabled={disabled} onClick={onClick}>
          {icon && <FontAwesomeIcon height={32} icon={icon} className="mr-2" />}
          {label}
        </StyledButton>
        {menuTrigger}
      </div>
    </Popover>
  );
};
