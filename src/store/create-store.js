import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { createStore } from "./my-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import {
  logger,
  botSendMessage,
  timeScheduler,
  crashReporter,
  // thunk
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      botSendMessage,
      thunk,
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
