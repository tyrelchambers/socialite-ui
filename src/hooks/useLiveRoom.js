import { useQuery } from "react-query";
import { getLiveRoom } from "../api/getLiveRoom";

export const useLiveRoom = (room) => {
  const query = useQuery("room", () => getLiveRoom(room));
  return query;
};
