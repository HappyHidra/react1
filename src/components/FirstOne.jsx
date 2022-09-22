import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
const Messages = () => {
  return <h1>Messages</h1>;
};
const Settings = () => {
  return <h1>Settings</h1>;
};

const FirstOne = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="nav flex flex-column nav-pills" aria-orientation="vertical">
              <NavLink to="profile" className="nav-link">
                Профиль
              </NavLink>
              <NavLink to="messages" className="nav-link">
                Сообщения
              </NavLink>
              <NavLink to="settings" className="nav-link">
                Настройки
              </NavLink>
              <NavLink to="friends" className="nav-link">
                Мои друзья
              </NavLink>
            </div>
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="/profile" element={<Profile function={props.function} />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default FirstOne;
