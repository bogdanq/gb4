import {} from "./types";

const initialState = {
  conversations: ["room1", "room2", "room3"],
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
