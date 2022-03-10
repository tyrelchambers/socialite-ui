import Grid from "../../layouts/Grid/Grid";
import React from "react";
import RoomListItem from "../../components/RoomListItem/RoomListItem";
import { getJoinToken } from "../../api/getJoinToken";
import { useLiveRoom } from "../../hooks/useLiveRoom";
import { useNavigate } from "react-location";
import { useStreamHistory } from "../../hooks/useStreamHistory";
import { useUser } from "../../hooks/useUser";

const StreamHistory = ({ user }) => {
  const { streamHistory } = useStreamHistory();
  const navigate = useNavigate();
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
