import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: var(--safety-yellow);
`;

const Participants = ({ participants }) => {
  return (
    <StyledP className="bg-gray-700 py-1 px-4 rounded-full text-yellow-500">
      <FontAwesomeIcon icon={faUserFriends} size="sm" className=" mr-2" />{" "}
      {participants.length}
    </StyledP>
  );
};

export default Participants;
