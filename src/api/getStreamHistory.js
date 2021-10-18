import { request } from "../config/axios";

export const getStreamHistory = () => {
  return request.get("/user/v1/streamHistory");
};
