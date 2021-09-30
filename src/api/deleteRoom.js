import { request } from "../config/axios";

export const deleteRoom = (sid) => {
  return request.post("/room/v1/delete", { sid });
};
