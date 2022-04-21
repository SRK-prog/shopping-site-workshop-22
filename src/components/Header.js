import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../store/authSlice";
import Cart from "./Cart";
import "./assets/stylesheet/Header.css";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="nav-container">
      <h2 className="header-h2">Redux Shopping App</h2>
      <Cart />
      <button
        onClick={() => dispatch(authAction.logout())}
        className="button-38"
      >
        logout
      </button>
    </header>
  );
};

export default Header;
