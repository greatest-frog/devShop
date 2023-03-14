import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return cart.length ? (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart_window">
          <ul className="cart_items list">
            {cart.map((item) => {
              return (
                <li key={item.id} className="cart_items_item">
                  <CartItem cartData={item} />
                </li>
              );
            })}
          </ul>
          <Checkout currency="$" />
        </div>
      </div>
    </HelmetProvider>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
      <div className="empty-cart">
        <h3>Your cart is empty now.</h3>
        <div className="to_shop">
          You can choose something{" "}
          <Link to="/shop" className="to_shop_link">
            here
          </Link>
          .
        </div>
      </div>
    </HelmetProvider>
  );
};

export default React.memo(Cart);
