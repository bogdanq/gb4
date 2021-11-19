import { createStore, combineReducers } from "redux";
// import { createStore } from "./my-redux";
import { profileReducer } from "./profile";

export const reducer = combineReducers({
  profile: profileReducer,
});

export const store = createStore(reducer);
