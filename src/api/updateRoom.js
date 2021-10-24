import { request } from "../config/axios";

export const updateRoom = (data) => {
  return request.put("/room/v1/update", data);
};
