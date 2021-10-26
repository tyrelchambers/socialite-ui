import React, { useEffect } from "react";
import { Track, VideoQuality } from "livekit-client";
import { ScreenShareView, useParticipant } from "livekit-react";
import { useState } from "react";
import styled from "styled-components";
import ParticipantView from "../ParticipantView/ParticipantView";
const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 300px;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  grid-template-areas: ${(props) =>
    props.wide
      ? `"main main main"
    "main main main"`
      : `"main main participants"
    "main main participants"`};
`;
const StyledGridStage = styled.div`
  grid-area: main;
`;
const StyledGridParticipants = styled.div`
  grid-area: participants;
`;

const Desktop = ({ roomState, controlRenderer, onLeave, adaptiveVideo }) => {
  const { participants, isConnecting, room, error } = roomState;
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const fn = async () => {
      // get camera permission
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      }
    };
    fn();
  }, []);

  if (error) {
    console.log(error);
    return <div>error {error.message}</div>;
  }

  if (isConnecting) {
    return <div>connecting</div>;
  }
  if (!room) {
    return <div>room closed</div>;
  }

  if (participants.length === 0) {
    return <div>no one is in the room</div>;
  }

  const ControlRenderer = controlRenderer;

  let screenTrack;
  participants.forEach((p) => {
    p.videoTracks.forEach((track) => {
      if (track.trackName === "screen" && track.track) {
        screenTrack = track.track;
      }
    });
  });

  let otherParticipants = [];
  let mainView;
  if (screenTrack) {
    otherParticipants = participants;
    mainView = (
      <ScreenShareView track={screenTrack} height="100%" width="100%" />
    );
  } else {
    otherParticipants = participants.slice(1);
    mainView = (
      <ParticipantView
        key={participants[0].identity}
        participant={participants[0]}
        width="100%"
        height="100%"
        orientation="landscape"
        showOverlay={showOverlay}
        quality={VideoQuality.HIGH}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      />
    );
  }

  return (
    <div>
      <StyledGridContainer
        wide={otherParticipants.length === 0}
        className="grid"
      >
        <StyledGridStage>{mainView}</StyledGridStage>
        {otherParticipants.length > 0 && (
          <StyledGridParticipants>
            {otherParticipants.map((participant, i) => {
              let quality = VideoQuality.HIGH;
              if (adaptiveVideo && i > 4) {
                quality = VideoQuality.LOW;
              }
              return (
                <ParticipantView
                  key={participant.identity}
                  participant={participant}
                  width="100%"
                  aspectWidth={16}
                  aspectHeight={9}
                  showOverlay={showOverlay}
                  quality={quality}
                  onMouseEnter={() => setShowOverlay(true)}
                  onMouseLeave={() => setShowOverlay(false)}
                  adaptiveVideo={adaptiveVideo}
                />
              );
            })}
          </StyledGridParticipants>
        )}
      </StyledGridContainer>
      <div className="flex justify-center mt-6">
        <ControlRenderer room={room} onLeave={onLeave} />
      </div>
    </div>
  );
};

export default Desktop;
