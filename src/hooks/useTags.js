import { useQuery } from "react-query";
import { getTags } from "../api/getTags";
export const useTags = () => {
  const query = useQuery("tags", getTags);
  return query;
};
