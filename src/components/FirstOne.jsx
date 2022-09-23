import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Messages from "./Messages";
import Settings from "./Settings";
import Friends from "./Friends";
import Advice from "./Advice";
import Shop from "./Shop";

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
              <NavLink to="advice" className="nav-link">
                Советы
              </NavLink>
              <NavLink to="shop" className="nav-link">
                Магазин
              </NavLink>
            </div>
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="/profile/*" element={<Profile fuu={props.fr.key_getUser} />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends fuu={props.fr.key_getUsers} />} />
              <Route path="/advice" element={<Advice />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default FirstOne;
