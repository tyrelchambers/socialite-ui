import { request } from "../config/axios";

export const getLiveRoom = (data) => {
  return request.get("/room/v1/", {
    params: {
      sid: data,
    },
  });
};
