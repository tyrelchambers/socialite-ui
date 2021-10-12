import { request } from "../config/axios";

export const getUser = () => {
  return request.get("/user/v1/");
};
