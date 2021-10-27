import React from "react";
import { useStreamHistory } from "../../hooks/useStreamHistory";
import Grid from "../../layouts/Grid/Grid";
import RoomListItem from "../../components/RoomListItem/RoomListItem";
import { useHistory } from "react-router";
import { useUser } from "../../hooks/useUser";
import { getJoinToken } from "../../api/getJoinToken";
import { useLiveRoom } from "../../hooks/useLiveRoom";

const StreamHistory = ({ user }) => {
  const { streamHistory } = useStreamHistory();
  const history = useHistory();
  const { update } = useLiveRoom();

  const joinHandler = async (room) => {
    const accessToken = await getJoinToken({
      room: room.uuid,
      participantName: `${user.firstName} ${user.lastName}`,
      participantMetadata: {
        participantId: user.uuid,
      },
    });

    update.mutate({
      isFinished: false,
      uuid: room.uuid,
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
              user={user}
              menuToggle
            />
          ))}
      </Grid>
    </>
  );
};

export default StreamHistory;
