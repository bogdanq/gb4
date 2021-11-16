import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store/create-store";
import "./global.css";

const Root = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider initialTheme="light">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
