import { DASHBOARD, HOME } from "../../routes/index.routes";

import Avatar from "../../components/Avatar/Avatar";
import { Link } from "react-location";
import Navbar from "../Navbar/Navbar";
import React from "react";
import socialiteLight from "../../assets/socialite - light.svg";
import styled from "styled-components";
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
        <Link
          to={DASHBOARD + "?tab=profile"}
          className="ml-4 border-l-2 border-gray-500 pl-4 flex items-center"
        >
          <Avatar
            size="sm"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            className="mr-2"
          />
          <p>
            {userQuery.data &&
              `${userQuery.data.firstName} ${userQuery.data.lastName}`}
          </p>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
