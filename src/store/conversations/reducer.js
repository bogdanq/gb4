import { HANDLE_CHANGE_MESSAGE_VALUE } from "./types";

const initialState = {
  conversations: [
    {
      title: "room1",
      value: "",
    },
    {
      title: "room2",
      value: "",
    },
  ],
};

// @TODO сделать удаление комнаты
export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((conversation) => {
          return conversation.title === action.payload.roomId
            ? { ...conversation, value: action.payload.value }
            : conversation;
        }),
      };
    default:
      return state;
  }
};
