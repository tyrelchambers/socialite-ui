import { request } from "../config/axios";

export const getTags = () => {
  return request.get("/tags/v1/");
};
