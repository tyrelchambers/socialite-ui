export function roomAdmin(room) {
  return {
    roomAdmin: true,
    roomJoin: true,
    roomCreate: true,
    room: room,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  };
}
