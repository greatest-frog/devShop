import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CartIcon from "../CartIcon/CartIcon";
import "./NavBar.css";
import "./DarkNavBar.css";

const NavBar = ({ goodsNumber, setMode, mode }) => {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      window.localStorage.setItem("colorMode", "dark");
      document.querySelector("body")?.classList?.add("dark");
    } else {
      setMode("light");
      window.localStorage.setItem("colorMode", "light");
      if (document.querySelector("body").classList.contains("dark")) {
        document.querySelector("body")?.classList?.remove("dark");
      }
    }
  };
  return (
    <nav>
      <div className="logo-link">
        <Link to="/">
          <h1>devShop</h1>
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-list_item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-list_item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list_item">
          <button className="btn_toggle-mode" onClick={() => toggleMode()}>
            {mode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1f1f1d"
                role="img"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f5f5f5"
                role="img"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                ></path>
              </svg>
            )}
          </button>
        </li>
        <li className="nav-list_item">
          <Link to="/cart">
            <CartIcon goodsNumber={goodsNumber} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);

NavBar.propTypes = {
  goodsNumber: PropTypes.number,
  setMode: PropTypes.func,
  mode: PropTypes.string,
};
