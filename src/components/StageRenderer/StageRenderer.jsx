import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AudioRenderer } from "livekit-react";
import React from "react";
import Desktop from "../Desktop/Desktop";

const StageRenderer = (stageProps) => {
  const isMobile = window.document.body.clientWidth <= 800;
  const { room } = stageProps.roomState;

  let mainElement;
  if (isMobile) {
    // mainElement = <MobileStage {...stageProps} />;
  } else {
    mainElement = <Desktop {...stageProps} />;
  }

  console.log("StageRenderer", stageProps);

  return (
    <div>
      {mainElement}
      {stageProps.roomState.audioTracks.map((track) => (
        <AudioRenderer key={track.sid} track={track} isLocal={false} />
      ))}

      {room?.canPlaybackAudio === false && (
        <div>
          <button
            onClick={() => {
              room.startAudio();
            }}
          >
            <FontAwesomeIcon size="1x" icon={faVolumeMute} />
            Click to Unmute
          </button>
        </div>
      )}
    </div>
  );
};

export default StageRenderer;
