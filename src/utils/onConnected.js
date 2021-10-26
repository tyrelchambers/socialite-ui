import { createLocalAudioTrack, createLocalVideoTrack } from "livekit-client";

export async function onConnected(room) {
  const audioTrack = await createLocalAudioTrack();
  await room.localParticipant.publishTrack(audioTrack);
  const videoTrack = await createLocalVideoTrack();
  console.log(videoTrack, "-#_#_#_#_");
  await room.localParticipant.publishTrack(videoTrack);
}
