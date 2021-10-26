import {
  faDesktop,
  faMicrophone,
  faMicrophoneSlash,
  faPhoneSlash,
  faStop,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useParticipant } from "livekit-react";

import {
  createLocalAudioTrack,
  createLocalVideoTrack,
  LocalTrackPublication,
  LocalVideoTrack,
  Room,
  Track,
  VideoPresets,
} from "livekit-client";
import React from "react";
import { LiveControl } from "../LiveControl/LiveControl";
import Buttons from "../Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LiveControls = ({
  room,
  enableScreenShare,
  enableAudio,
  enableVideo,
  onLeave,
  isHost,
  endStream,
}) => {
  const { publications, isAudioMuted, isVideoMuted, unpublishTrack } =
    useParticipant(room.localParticipant);

  const audioPub = publications.find((val) => val.kind === Track.Kind.Audio);
  const videoPub = publications.find((val) => {
    return val.kind === Track.Kind.Video && val.trackName !== "screen";
  });
  const screenPub = publications.find((val) => {
    return val.kind === Track.Kind.Video && val.trackName === "screen";
  });
  if (enableScreenShare === undefined) {
    enableScreenShare = true;
  }
  if (enableVideo === undefined) {
    enableVideo = true;
  }
  if (enableAudio === undefined) {
    enableAudio = true;
  }

  let muteButton;
  if (enableAudio) {
    if (!audioPub || isAudioMuted) {
      muteButton = (
        <LiveControl
          label="Unmute"
          icon={faMicrophoneSlash}
          onClick={async () => {
            if (audioPub) {
              audioPub.unmute();
            } else {
              // track not published
              const audioTrack = await createLocalAudioTrack();
              room.localParticipant.publishTrack(audioTrack);
            }
          }}
        />
      );
    } else {
      muteButton = (
        <LiveControl
          label="Mute"
          icon={faMicrophone}
          onClick={() => audioPub.mute()}
        />
      );
    }
  }

  let videoButton;
  if (enableVideo) {
    if (videoPub?.track && !isVideoMuted) {
      videoButton = (
        <LiveControl
          label="Stop video"
          icon={faVideo}
          onClick={() => videoPub.mute()}
        />
      );
    } else {
      videoButton = (
        <LiveControl
          label="Start video"
          icon={faVideoSlash}
          onClick={async () => {
            if (videoPub) {
              videoPub.unmute();
            } else {
              const videoTrack = await createLocalVideoTrack();
              room.localParticipant.publishTrack(videoTrack);
            }
          }}
        />
      );
    }
  }

  let screenButton;
  if (enableScreenShare) {
    if (screenPub?.track) {
      screenButton = (
        <LiveControl
          label="Stop sharing"
          icon={faStop}
          onClick={() => unpublishTrack(screenPub.track)}
        />
      );
    } else {
      screenButton = (
        <LiveControl
          label="Share screen"
          icon={faDesktop}
          onClick={async () => {
            try {
              const captureStream =
                // @ts-ignore
                await navigator.mediaDevices.getDisplayMedia({
                  video: {
                    width: VideoPresets.fhd.resolution.width,
                    height: VideoPresets.fhd.resolution.height,
                  },
                });

              room.localParticipant.publishTrack(captureStream.getTracks()[0], {
                name: "screen",
                videoEncoding: {
                  maxBitrate: 3000000,
                  maxFramerate: 30,
                },
              });
            } catch (err) {
              // TODO: display error
            }
          }}
        />
      );
    }
  }

  return (
    <div className="flex gap-6">
      {muteButton}
      {videoButton}
      {screenButton}
      {isHost && (
        <Buttons
          rounded
          variant="danger"
          onClick={() => {
            endStream();
            room.disconnect();
            videoPub.mute();
            audioPub.mute();
          }}
          title="End Stream"
        >
          <FontAwesomeIcon icon={faPhoneSlash} />
        </Buttons>
      )}
    </div>
  );
};
