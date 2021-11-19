export const messageSelector = (roomId) => (state) => {
  console.log("messages selector");
  return state.messages.messages[roomId] ?? [];
};
