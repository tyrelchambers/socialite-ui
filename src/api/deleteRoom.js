import { request } from "../config/axios";

export const deleteRoom = (data) => {
  return request.post("/rooms/v1/delete", data);
};
