import { useState } from "react";

export const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState();

  const setToken = (token) => {
    setAccessToken(token);
  };

  return { accessToken, setToken };
};
