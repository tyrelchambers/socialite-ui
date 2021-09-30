import { useState } from "react";

export const useStream = () => {
  const [stream, setState] = useState({
    title: "",
    isLive: false,
    sid: "",
  });

  const setTitle = (title) => {
    setState({ ...stream, title });
  };

  const setStreamConfig = (config) => {
    setState({ ...stream, ...config });
  };

  const reset = () => {
    setState({ title: "", isLive: false, sid: "" });
  };

  return {
    ...stream,
    setTitle,
    stream,
    setStreamConfig,
    reset,
  };
};
