import { useQuery } from "react-query";
import { getRooms } from "../api/getRooms";

export const useRooms = () => {
  const query = useQuery("rooms", getRooms);
  return query;
};
