import { useState } from "react";

export const useStream = () => {
  const [stream, setState] = useState({
    name: "",
    isLive: false,
    sid: "",
  });

  const setName = (name) => {
    setState({ ...stream, name });
  };

  const setStreamConfig = (config) => {
    setState({ ...stream, ...config });
  };

  const reset = () => {
    setState({ name: "", isLive: false, sid: "" });
  };

  return {
    ...stream,
    setName,
    stream,
    setStreamConfig,
    reset,
  };
};
