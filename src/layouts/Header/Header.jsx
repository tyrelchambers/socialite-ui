import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME } from "../../routes/index.routes";
import Navbar from "../Navbar/Navbar";

const StyledHeader = styled.header`
  background: var(--lighter-black);
`;

const Header = () => {
  return (
    <StyledHeader className="p-6 flex items-center justify-between">
      <Link to={HOME} className="title">
        Socialite
      </Link>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
