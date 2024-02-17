import React from "react";
import ReactDOM from "react-dom";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./store/UserProvider";
import AdminProvider from "./store/AdminProvider";

ReactDOM.render(
  <BrowserRouter>
    <AdminProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AdminProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
