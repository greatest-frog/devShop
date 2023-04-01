import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import CartIcon from "../../components/CartIcon/CartIcon";
import styles from "./NavBar.module.css";

const NavBar = ({ setMode, mode }) => {
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
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.nav__logo}>devShop</div>
      </Link>
      <ul className={classNames(styles.nav__list, "list")}>
        <li className="nav-list_item">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav-list_item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list_item">
          <button
            className={classNames(
              styles.button_toggle,
              mode === "light" ? styles.light : styles.dark
            )}
            onClick={() => toggleMode()}
          ></button>
        </li>
        <li className="nav-list_item">
          <Link to="/cart">
            <CartIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(NavBar);

NavBar.propTypes = {
  setMode: PropTypes.func,
  mode: PropTypes.string,
};
