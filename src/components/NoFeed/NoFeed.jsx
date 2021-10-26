import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledNoFeed = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--lighter-black);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoFeed = () => {
  return (
    <StyledNoFeed className="rounded-lg">
      <FontAwesomeIcon
        icon={faVideoSlash}
        className="text-gray-500"
        size="7x"
      />
    </StyledNoFeed>
  );
};

export default NoFeed;
