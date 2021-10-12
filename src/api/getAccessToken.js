import { request } from "../config/axios";

export const getAccessToken = (data) => {
  return request.post("/accessToken/v1/", data);
};
