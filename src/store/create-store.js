import { createStore } from "redux";
// import { createStore } from "./my-redux";
import { counterReducer } from "./count";

export const store = createStore(counterReducer);
