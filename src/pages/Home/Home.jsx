import React from "react";
import { useGetCurrentTab } from "../../hooks/useGetCurrentTab";
import Header from "../../layouts/Header/Header";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { useRooms } from "../../hooks/useRooms";
import RoomListItem from "../../components/RoomListItem/RoomListItem";
import { useUser } from "../../hooks/useUser";
import { useHistory } from "react-router";
import { getJoinToken } from "../../api/getJoinToken";

const Home = () => {
  const { currentTab } = useGetCurrentTab("for you");
  const roomsQuery = useRooms();
  const userQuery = useUser();
  const history = useHistory();

  const joinHandler = async (roomId) => {
    console.log(roomId);
    const accessToken = await getJoinToken({
      room: roomId,
      participantName: `${userQuery.data.firstName} ${userQuery.data.lastName}`,
    });

    history.push(`/live/${roomId}?token=${accessToken}`);
  };

  return (
    <div className="flex flex-col">
      <Header />

      <Wrapper className="mt-6">
        <div className="flex gap-6 w-full">
          <Sidebar />
          <div className="grid grid-cols-3 w-full gap-4">
            {roomsQuery.data &&
              roomsQuery.data.map((room) => (
                <RoomListItem
                  room={room}
                  joinHandler={() => joinHandler(room.roomId)}
                  user={userQuery.data}
                />
              ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
