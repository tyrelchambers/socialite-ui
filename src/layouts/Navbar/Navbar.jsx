import {
  DASHBOARD,
  HOME,
  LOGIN,
  SIGNOUT,
  SIGNUP,
} from "../../routes/index.routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-location";
import React from "react";
import { StyledMainButton } from "../../components/Buttons/Buttons";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user }) => {
  return (
    <div className="flex items-center gap-6">
      {!user ? (
        <>
          <Link to={LOGIN} className="text-sm font-medium mr-6 text-gray-300">
            Login
          </Link>
          <Link to={SIGNUP}>
            <StyledMainButton>
              <FontAwesomeIcon icon={faSmileBeam} className="mr-2" />
              Sign Up
            </StyledMainButton>
          </Link>
        </>
      ) : (
        <>
          <Link to={HOME}>Home</Link>
          <Link to={DASHBOARD}>Dashboard</Link>
          <Link to={SIGNOUT}>Sign Out</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
