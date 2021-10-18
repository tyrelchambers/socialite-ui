import { useQuery } from "react-query";
import { getStreamHistory } from "../api/getStreamHistory";

export const useStreamHistory = () => {
  const streamHistory = useQuery("streamHistory", getStreamHistory);
  return { streamHistory };
};
