import { request } from "../config/axios";

export const login = (data) => {
  return request.post("/auth/v1/login", data);
};
