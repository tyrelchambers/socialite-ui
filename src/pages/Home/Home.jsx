import Grid from "../../layouts/Grid/Grid";
import Header from "../../layouts/Header/Header";
import React from "react";
import RoomListItem from "../../components/RoomListItem/RoomListItem";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { getJoinToken } from "../../api/getJoinToken";
import { useGetCurrentTab } from "../../hooks/useGetCurrentTab";
import { useNavigate } from "react-location";
import { useRooms } from "../../hooks/useRooms";
import { useUser } from "../../hooks/useUser";

const Home = () => {
  const { currentTab } = useGetCurrentTab("for you");
  const roomsQuery = useRooms();
  const userQuery = useUser();
  const navigate = useNavigate();

  const joinHandler = async (room) => {
    const accessToken = await getJoinToken({
      room: room.uuid,
      participantName: `${userQuery.data.firstName} ${userQuery.data.lastName}`,
      participantMetadata: {
        participantId: userQuery.data.uuid,
      },
    });

    navigate(`/live/${room.roomId}?token=${accessToken}`);
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
