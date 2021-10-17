import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons/Buttons";
import Participants from "../../components/Participants/Participants";
const StyledRoom = styled.div`
  background-color: var(--lighter-black);
`;

const RoomListItem = ({ room, joinHandler, user }) => {
  return (
    <StyledRoom className="p-3 rounded-lg shadow-lg flex flex-col justify-between">
      {console.log(room)}
      <p>{room.name}</p>
      <footer className="flex items-center justify-between mt-2">
        <div>
          <Participants participants={room.participants} />
        </div>
        {user && (
          <Buttons variant="primary" onClick={joinHandler}>
            Join Room
          </Buttons>
        )}
      </footer>
    </StyledRoom>
  );
};

export default RoomListItem;
