import React from "react";
import { VideoQuality } from "livekit-client";
import { ParticipantView, ScreenShareView } from "livekit-react";
import { useState } from "react";
import styled from "styled-components";
const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 300px;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
  grid-template-areas:
    "main main participants"
    "main main participants";
`;
const StyledGridStage = styled.div`
  grid-area: main;
`;
const StyledGridParticipants = styled.div`
  grid-area: participants;
`;

const Desktop = ({ roomState, controlRenderer, onLeave, adaptiveVideo }) => {
  const { isConnecting, room, error, participants } = roomState;
  const [showOverlay, setShowOverlay] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     room.disconnect();
  //   };
  // }, []);

  console.log(roomState);

  if (error) {
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
      <StyledGridContainer className="grid">
        <StyledGridStage>{mainView}</StyledGridStage>
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
      </StyledGridContainer>
      <div className="flex justify-center mt-6">
        <ControlRenderer room={room} onLeave={onLeave} />
      </div>
    </div>
  );
};

export default Desktop;
