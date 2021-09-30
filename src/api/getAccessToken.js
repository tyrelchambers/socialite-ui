import { request } from "../config/axios";

export const getAccessToken = (data) => {
  return request.get("/accessToken/v1/", { params: data });
};
