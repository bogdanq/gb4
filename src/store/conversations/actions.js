import { CREATE_CONVERSATION, HANDLE_CHANGE_MESSAGE_VALUE } from "./types";
import { REMOVE_CONVERSATION } from "../types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: { value, roomId },
});

export const removeConversationById = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  payload: conversationId,
});
