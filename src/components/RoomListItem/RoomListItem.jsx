import React from "react";
import styled from "styled-components";
import Buttons from "../Buttons/Buttons";

const StyledRoom = styled.div`
  background-color: var(--lighter-black);
`;

const RoomListItem = ({ room, joinHandler, user }) => {
  return (
    <StyledRoom className="p-3 rounded-lg shadow-lg flex flex-col justify-between">
      {/* {console.log(room)} */}
      <p>{room.name}</p>
      <footer className="flex items-center justify-between">
        <div>
          <p>{room.maxParticipants}</p>
        </div>
        {user && (
          <Buttons variant="primary" className=" mt-2" onClick={joinHandler}>
            Join Room
          </Buttons>
        )}
      </footer>
    </StyledRoom>
  );
};

export default RoomListItem;
