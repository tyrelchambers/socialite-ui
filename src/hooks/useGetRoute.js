import { useState } from "react";

export const useGetRoute = (route) => {
  const [state, setstate] = useState(route);
  return { state };
};
