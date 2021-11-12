import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { Layout, Header, ChatList, MessageList } from "./components";
import "./global.css";

const light = createTheme({
  theme: {
    color: "#fff",
  },
});

const dark = createTheme({
  theme: {
    color: "#000",
  },
});

// @TODO router ChatPage
ReactDOM.render(
  <ThemeProvider theme={light}>
    <Layout
      header={<Header />}
      chats={<ChatList />}
      messages={<MessageList />}
    />
  </ThemeProvider>,
  document.getElementById("root")
);
