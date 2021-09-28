import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Buttons from "../../components/Buttons/Buttons";

const StyledHeader = styled.header`
  background: var(--lighter-black);
`;

const Header = () => {
  return (
    <StyledHeader className="p-6 flex items-center justify-between">
      <p className="title">Socialite</p>
      <div className="flex items-center">
        <Link className="text-sm font-medium mr-6 text-gray-300">Login</Link>
        <Buttons>
          <FontAwesomeIcon icon={faSmileBeam} className="mr-2" />
          Sign Up
        </Buttons>
      </div>
    </StyledHeader>
  );
};

export default Header;
