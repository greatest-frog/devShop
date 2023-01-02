import { Link } from "react-router-dom";

import CartIcon from "../CartIcon/CartIcon";
import "./NavBar.css";

const NavBar = ({ goodsNumber }) => {
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
          <Link to="/cart">
            <CartIcon goodsNumber={goodsNumber} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
