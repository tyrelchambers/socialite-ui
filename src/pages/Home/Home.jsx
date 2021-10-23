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
import Grid from "../../layouts/Grid/Grid";

const Home = () => {
  const { currentTab } = useGetCurrentTab("for you");
  const roomsQuery = useRooms();
  const userQuery = useUser();
  const history = useHistory();

  const joinHandler = async (room) => {
    const accessToken = await getJoinToken({
      room: room.uuid,
      participantName: `${userQuery.data.firstName} ${userQuery.data.lastName}`,
      participantMetadata: {
        participantId: userQuery.data.uuid,
      },
    });

    history.push(`/live/${room.roomId}?token=${accessToken}`);
  };

  return (
    <div className="flex flex-col">
      <Header />

      <Wrapper className="mt-6">
        <div className="flex gap-6 w-full">
          <Sidebar />
          <Grid>
            {roomsQuery.data &&
              roomsQuery.data
                .filter((room) => !room.isFinished && room.isFinished !== null)
                .map((room) => (
                  <RoomListItem
                    key={room.uuid}
                    room={room}
                    joinHandler={() => joinHandler(room)}
                    user={userQuery.data}
                  />
                ))}
          </Grid>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
