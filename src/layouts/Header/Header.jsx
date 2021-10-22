import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME } from "../../routes/index.routes";
import Navbar from "../Navbar/Navbar";
import socialiteLight from "../../assets/socialite - light.svg";
import { useUser } from "../../hooks/useUser";

const StyledHeader = styled.header`
  background: var(--lighter-black);
`;

const Header = () => {
  const userQuery = useUser();

  return (
    <StyledHeader className="p-6 flex items-center justify-between">
      <Link to={HOME} className="title">
        <img src={socialiteLight} className="w-32" />
      </Link>
      <div className="flex items-center">
        <Navbar user={userQuery.data} />
        <p className="ml-4 border-l-2 border-gray-500 pl-4">
          {userQuery.data &&
            `${userQuery.data.firstName} ${userQuery.data.lastName}`}
        </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
