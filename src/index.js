import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { MessageList } from "./components";

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

ReactDOM.render(
  <ThemeProvider theme={light}>
    <MessageList />
  </ThemeProvider>,
  document.getElementById("root")
);
