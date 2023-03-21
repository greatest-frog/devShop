import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [arrayPosition, setArrayPosition] = useState(0);
  const [displayingArray, setDisplayingArray] = useState([]);

  // sets a new position for the array if there are less than 100 pixels left
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

  // makes a slice of the displayed elements
  useEffect(() => {
    setDisplayingArray(cart.slice(0, 10 * (arrayPosition + 1)));
  }, [cart, arrayPosition]);

  return cart.length ? (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
      <div className="cart">
        <h2 className={styles.cart__heading}>Cart</h2>
        <div className={styles.cart__window}>
          <ul className={classNames(styles.cart__items, "list")}>
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
      <div className={styles.cart_empty}>
        <h3 className={styles.cart_empty_heading}>Your cart is empty now.</h3>
        <div className="to_shop">
          You can choose something{" "}
          <Link to="/shop" className={styles.link}>
            here
          </Link>
          .
        </div>
      </div>
    </HelmetProvider>
  );
};

export default React.memo(Cart);
