import { useMutation, useQuery } from "react-query";
import { getLiveRoom } from "../api/getLiveRoom";
import { updateRoom } from "../api/updateRoom";

export const useLiveRoom = (room) => {
  const query = useQuery("room", () => getLiveRoom(room), {
    enabled: !!room,
  });
  const update = useMutation((data) => updateRoom(data));
  return { query, update };
};
