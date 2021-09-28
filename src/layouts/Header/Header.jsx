import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledMainButton } from "../../components/Buttons/Buttons";
import { HOME, LOGIN, SIGNUP } from "../../routes/index.routes";

const StyledHeader = styled.header`
  background: var(--lighter-black);
`;

const Header = () => {
  return (
    <StyledHeader className="p-6 flex items-center justify-between">
      <Link to={HOME} className="title">
        Socialite
      </Link>
      <div className="flex items-center">
        <Link to={LOGIN} className="text-sm font-medium mr-6 text-gray-300">
          Login
        </Link>
        <Link to={SIGNUP}>
          <StyledMainButton>
            <FontAwesomeIcon icon={faSmileBeam} className="mr-2" />
            Sign Up
          </StyledMainButton>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
