import { request } from "../config/axios";

export const createRoom = (data) => {
  return request.post("/rooms/v1/create", data);
};
