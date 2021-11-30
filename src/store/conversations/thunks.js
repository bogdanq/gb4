export const getConversationsFB = () => (dispatch, _, api) => {
  api
    .getConversationsApi()
    .then((snapshot) => {
      const conversations = [];

      snapshot.forEach((snap) => {
        conversations.push(snap.val());
      });

      dispatch({ type: "GET_CONVERSATIONS_SUCCESS", payload: conversations });

      console.log("conversations", conversations);
    })
    .catch((e) => console.log("error", e));
};
