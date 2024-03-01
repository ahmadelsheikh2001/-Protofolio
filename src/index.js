import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./store/UserProvider";
import AdminProvider from "./store/AdminProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppProvider from "./store/AppProvider";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <Provider store={store}>
        <AdminProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AdminProvider>
      </Provider>
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
