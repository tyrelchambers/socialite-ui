import { useQuery } from "react-query";
import { getUser } from "../api/getUser";

export const useUser = () => {
  const token = window.localStorage.getItem("token");
  const query = useQuery("currentUser", getUser, {
    enabled: !!token,
    onError: (err) => {
      if (err?.response.data.error === "USER_NOT_FOUND") {
        window.localStorage.removeItem("token");
      }
    },
  });

  return query;
};
