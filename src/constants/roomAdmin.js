export function roomAdmin({ room, participantName }) {
  return {
    roomAdmin: true,
    roomJoin: true,
    roomCreate: true,
    room: room,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
    participantName,
  };
}
