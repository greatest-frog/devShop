import React from "react";
import classNames from "classnames";

import CartItem from "../../components/CartItem/CartItem";
import styles from "./CartList.module.css";

const CartList = ({ array }) => {
  return (
    <ul className={classNames(styles.cart__items, "list")}>
      {array.map((item) => {
        return (
          <li key={item.id} className="cart_items_item">
            <CartItem cartData={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(CartList);
