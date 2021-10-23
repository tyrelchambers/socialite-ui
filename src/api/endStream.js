import { request } from "../config/axios";

export const endStream = (data) => {
  return request.put("/room/v1/endStream", data);
};
