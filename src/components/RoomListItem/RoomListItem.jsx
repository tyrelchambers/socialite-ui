import React from "react";
import styled from "styled-components";
import Participants from "../../components/Participants/Participants";
import { fullName } from "../../utils/fullName";
const StyledRoom = styled.div`
  background-color: var(--lighter-black);
  cursor: pointer;
  width: 100%;
  min-width 320px;
  .faded-bg {
    background: linear-gradient(
      0deg,
      var(--lighter-black) 5%,
      rgba(0, 0, 0, 0) 50%
    );

    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .tag {
    color: var(--safety-yellow);
  }
`;

const RoomListItem = ({ room, joinHandler, user }) => {
  return (
    <StyledRoom
      className="rounded-lg shadow-lg flex flex-col justify-between overflow-hidden"
      onClick={user ? joinHandler : null}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1607968565043-36af90dde238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="object-cover z-{1}"
        />
        <Participants
          participants={room.participants}
          className="absolute bottom-2 right-4 shadow-lg z-10"
        />
        <div className="faded-bg"></div>
      </div>
      <div className="p-3 relative">
        <div className="flex gap-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
          />
          <div className="flex flex-col">
            <p title={room.name} className="truncate w-56">
              {room.name}
            </p>
            <p className="text-gray-400 text-sm mt-1">{fullName(room.User)}</p>
          </div>
        </div>
        <footer className="flex items-center mt-4 gap-2">
          {["css", "js", "html"].map((tag) => (
            <p className="tag text-xs">#{tag}</p>
          ))}
        </footer>
      </div>
    </StyledRoom>
  );
};

export default RoomListItem;
