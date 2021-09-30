import { useState } from "react";

export const useDeviceMedia = () => {
  const [video, setVideoState] = useState();

  const setVideo = (src) => {
    setVideoState(src);
  };

  return {
    video,
    setVideo,
  };
};
