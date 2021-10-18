import { request } from "../config/axios";

export const getRooms = () => {
  return request.get("/rooms/v1/all");
};
