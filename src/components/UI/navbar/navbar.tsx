import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyButton } from "../button/my-button";
import { AuthContext } from "../../../context";

export const Navbar = () => {
  const logout = () => {
    setIsAuth(false);
      localStorage.removeItem('auth')
  };
  const { setIsAuth } = useContext(AuthContext);
  return (
    <div className="navbar">
      <MyButton title={"Logout"} onClick={logout} />
      <div className="navbar__links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
    </div>
  );
};
