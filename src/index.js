import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage } from "./pages";
import { Header } from "./components";
import "./global.css";

const light = createTheme({
  theme: {
    color: "#fff",
  },
});

const Root = () => {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
