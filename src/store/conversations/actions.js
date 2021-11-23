import {
  CREATE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  DELETE_CONVERSATION,
} from "./types";

// @TODO сделать обработку в редюсере
export const createConversations = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

// @TODO описать его в редюсере
export const deleteConversation = (roomId) => ({
  type: DELETE_CONVERSATION,
  payload: roomId,
});
