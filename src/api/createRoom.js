import { request } from "../config/axios";

export const createRoom = (data) => {
  return request.post("/room/v1/create", data);
};
