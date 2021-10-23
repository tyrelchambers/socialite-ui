import { useMutation, useQuery } from "react-query";
import { getLiveRoom } from "../api/getLiveRoom";
import { deleteRoom } from "../api/deleteRoom";
import { useHistory } from "react-router";
import { endStream } from "../api/endStream";
export const useLiveRoom = (room) => {
  const history = useHistory();
  const query = useQuery("room", () => getLiveRoom(room), {
    enabled: !!room,
  });
  const endStreamHandler = useMutation((data) => endStream(data), {
    onSuccess: () => {
      history.push("/");
    },
  });
  return { query, endStream: endStreamHandler };
};
