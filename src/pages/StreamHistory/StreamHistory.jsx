import React from "react";
import { useStreamHistory } from "../../hooks/useStreamHistory";
import Grid from "../../layouts/Grid/Grid";
import RoomListItem from "../../components/RoomListItem/RoomListItem";
import { useHistory } from "react-router";
import { useUser } from "../../hooks/useUser";
import { getJoinToken } from "../../api/getJoinToken";

const StreamHistory = () => {
  const { streamHistory } = useStreamHistory();
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
    <>
      <h1 className="text-3xl">Stream History</h1>
      <Grid className="mt-10">
        {streamHistory.data &&
          streamHistory.data.map((room) => (
            <RoomListItem
              key={room.roomId}
              room={room}
              joinHandler={() => joinHandler(room)}
              user={userQuery.data}
            />
          ))}
      </Grid>
    </>
  );
};

export default StreamHistory;
