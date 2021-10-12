import { request } from "../config/axios";

export const deleteRoom = (sid) => {
  return request.post("/rooms/v1/delete", { sid });
};
