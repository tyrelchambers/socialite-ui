import { request } from "../config/axios";

export const getJoinToken = (data) => {
  return request.post("/rooms/v1/joinToken", data);
};
