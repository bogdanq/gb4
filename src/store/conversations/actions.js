import { CREATE_CONVERSATION } from "./types";

// @TODO сделать обработку в редюсере
export const createConversations = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});
