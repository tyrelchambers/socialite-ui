import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons/Buttons";

const StyledRoom = styled.div`
  background-color: var(--lighter-black);
`;

const RoomListItem = ({ room, joinHandler, user }) => {
  return (
    <StyledRoom className="p-3 rounded-lg shadow-lg">
      <p>{room.name}</p>
      {user && (
        <Buttons
          variant="secondary"
          className="w-full mt-2"
          onClick={joinHandler}
        >
          Join Room
        </Buttons>
      )}
    </StyledRoom>
  );
};

export default RoomListItem;
