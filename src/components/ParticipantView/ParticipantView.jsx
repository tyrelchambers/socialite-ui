import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RemoteTrackPublication, Track, VideoQuality } from "livekit-client";
import { useParticipant, VideoRenderer } from "livekit-react";
import React, { useEffect, useState } from "react";
import { AspectRatio } from "react-aspect-ratio";
import { useInView } from "react-intersection-observer";
import NoFeed from "../NoFeed/NoFeed";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  .overlay {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0.5em;
    background-color: var(--raisin-black);
    gap: 1em;
    padding: 0.5em 1em;
    border-radius: 20px;

    p,
    .overlay-icon {
      color: var(--white);
    }
  }
`;

const ParticipantView = ({
  participant,
  width,
  height,
  className,
  aspectWidth,
  aspectHeight,
  orientation,
  displayName,
  showOverlay,
  quality,
  adaptiveVideo,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const { isLocal, isAudioMuted, subscribedTracks } =
    useParticipant(participant);
  const { ref, inView } = useInView();
  const [videoPub, setVideoPub] = useState();
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [callbackTimeout, setCallbackTimeout] = useState();

  useEffect(() => {
    let enabled = inView;
    if (!adaptiveVideo) {
      enabled = true;
    }
    if (videoEnabled !== enabled) {
      setVideoEnabled(enabled);
    }
  }, [participant, inView, adaptiveVideo]);

  // effect to set videoPub
  useEffect(() => {
    let newVideoPub;
    subscribedTracks.forEach((pub) => {
      if (
        pub.isSubscribed &&
        pub.kind === Track.Kind.Video &&
        pub.trackName !== "screen" &&
        !newVideoPub
      ) {
        newVideoPub = pub;
      }
    });
    setVideoPub(newVideoPub);
  }, [subscribedTracks]);

  // debounce adaptive settings, to ensure less twitchy responses
  useEffect(() => {
    if (callbackTimeout) {
      clearTimeout(callbackTimeout);
      setCallbackTimeout(undefined);
    }
    if (!(videoPub instanceof RemoteTrackPublication)) {
      return;
    }

    // always enable right away, while disable quality changes are delayed
    if (videoEnabled) {
      videoPub.setEnabled(true);
    }

    setCallbackTimeout(
      setTimeout(() => {
        videoPub.setEnabled(videoEnabled);
        if (videoEnabled) {
          videoPub.setVideoQuality(quality ?? VideoQuality.HIGH);
        }
      }, 3000)
    );
    return () => {
      if (callbackTimeout) {
        clearTimeout(callbackTimeout);
        setCallbackTimeout(undefined);
      }
    };
  }, [quality, videoEnabled, videoPub]);

  // when aspect matches, cover instead
  let objectFit = "contain";
  let videoOrientation = "landscape" | "portrait" | undefined;
  if (!orientation && aspectWidth && aspectHeight) {
    orientation = aspectWidth > aspectHeight ? "landscape" : "portrait";
  }
  if (videoPub?.dimensions) {
    videoOrientation =
      videoPub.dimensions.width > videoPub.dimensions.height
        ? "landscape"
        : "portrait";
  }

  if (videoOrientation === orientation) {
    objectFit = "cover";
  }

  if (!displayName) {
    displayName = participant.identity;
    if (isLocal) {
      displayName += " (You)";
    }
  }

  let mainElement;
  if (videoPub?.track && videoEnabled && !videoPub?.isMuted) {
    mainElement = (
      <VideoRenderer
        track={videoPub.track}
        isLocal={isLocal}
        objectFit={objectFit}
        width="100%"
        height="100%"
      />
    );
  } else {
    mainElement = <NoFeed />;
  }

  return (
    <StyledWrapper
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      width={width}
      height={height}
    >
      {aspectWidth && aspectHeight && (
        <AspectRatio ratio={aspectWidth / aspectHeight}>
          {mainElement}
        </AspectRatio>
      )}
      {(!aspectWidth || !aspectHeight) && mainElement}

      {showOverlay && (
        <div className="overlay shadow-md">
          <p>{displayName}</p>
          <div>
            <FontAwesomeIcon
              icon={isAudioMuted ? faMicrophoneSlash : faMicrophone}
              height={24}
              className="overlay-icon"
            />
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

export default ParticipantView;
