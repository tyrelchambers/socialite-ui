import React from "react";
import { LiveKitRoom } from "livekit-react";
import "livekit-react/dist/index.css";
import { createLocalAudioTrack, createLocalVideoTrack } from "livekit-client";
import { LiveControls } from "../LiveControls/LiveControls";

const LiveView = () => {
  const url = "ws://localhost:7880";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzU1Mjg4MjYsImlzcyI6IkFQSXBOM1RwbTZnQ1ZtNSIsImp0aSI6InR5cmVsIiwibmJmIjoxNjMyOTM2ODI2LCJzdWIiOiJ0eXJlbCIsInZpZGVvIjp7InJvb20iOiJteXJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.5RaKeYeUPoUFhYi6BycKrU8kA8iLBXpHyqIZla4_X-I";
  return (
    <div className="w-full">
      <LiveKitRoom
        url={url}
        token={token}
        onConnected={(room) => onConnected(room)}
        controlRenderer={(props) => <LiveControls {...props} />}
      />
    </div>
  );
};

async function onConnected(room) {
  const audioTrack = await createLocalAudioTrack();
  await room.localParticipant.publishTrack(audioTrack);
  const videoTrack = await createLocalVideoTrack();
  await room.localParticipant.publishTrack(videoTrack);
}

export default LiveView;
