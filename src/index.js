import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store/create-store";
import "./global.css";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomThemeProvider initialTheme="light">
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/gists" element={<GistsPage />} />
              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
