import React from "react";
import ReactDOM from "react-dom/client";
import FirstOne from "./components/FirstOne";
import { getUser, getUsers } from "./state";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstOne function={{ key_getUser: getUser, key_getUsers: getUsers }} />);
