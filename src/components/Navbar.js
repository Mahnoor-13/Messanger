import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Navbar = () => {
  const { register, user, loader, logout } = useContext(ContextProvider);
  const userRegister = () => {
    register();
  };
  const userLogout = () => {
    logout();
  };
  const checkUser = () => {
    return !loader ? (
      user ? (
        <div className="navbar__links">
          <li>
            <span className="navbar__img">
              <img src={user.photoURL} />
            </span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userLogout}>
              Logout
            </button>
          </li>
        </div>
      ) : (
        <li>
          <button className="navbar__btn" onClick={userRegister}>
            Register with Google
          </button>
        </li>
      )
    ) : (
      "loading..."
    );
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Messenger</div>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
