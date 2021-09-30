import { useQuery } from "react-query";
import { getAccessToken } from "../api/getAccessToken";

export const useAccessToken = (initialData) => {
  const query = useQuery("accessToken", () => getAccessToken(initialData));
  return query;
};
