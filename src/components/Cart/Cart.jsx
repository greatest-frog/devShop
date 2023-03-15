import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [displayingArray, setDisplayingArray] = useState([]);

  const scrollHandler = (e) => {
    const documentNode = e.target.documentElement;
    if (
      documentNode.scrollHeight - documentNode.scrollTop - window.innerHeight <
        100 &&
      cart.length > arrayPosition * 10
    ) {
      setArrayPosition((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setDisplayingArray(cart.slice(0, 10 * (arrayPosition + 1)));
  }, [cart, arrayPosition]);

  return cart.length ? (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart_window">
          <ul className="cart_items list">
            {displayingArray.map((item) => {
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
