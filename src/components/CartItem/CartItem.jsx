import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Counter from "../Counter/Counter";
import styles from "./CartItem.module.css";
import goods from "../../mock/mock";
import { useDispatch } from "react-redux";
import { changeSelect, deleteItem } from "../../reducers/cartReducer";

const CartItem = ({ cartData }) => {
  const {
    name: itemName,
    src,
    number: maxAmount,
    price,
    currency,
  } = goods[cartData.id];
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <input
        type="checkbox"
        name="cartItem"
        checked={cartData.active}
        onChange={() => dispatch(changeSelect(cartData.id))}
        className={styles.cartItem__checkbox}
      />
      <Link to={`/shop/${cartData.id}`}>
        <img
          className={styles.cartItem__image}
          src={process.env.PUBLIC_URL + src}
          alt={`${itemName}`}
        />
      </Link>
      <div className={styles.cartItem__info}>
        <Link to={`/shop/${cartData.id}`}>
          <h3 className={styles.cartItem__heading}>{itemName}</h3>
        </Link>
        <div className={styles.cartItem__info_tools}>
          <button
            className={styles.button_delete}
            onClick={() => dispatch(deleteItem(cartData.id))}
          >
            Delete
          </button>
          <Counter maxAmount={maxAmount} itemId={cartData.id} />
        </div>
      </div>

      <div className={styles.cartItem__buyInfo}>
        <div className={styles.cartItem__price}>{`${price} ${currency}`}</div>
        <div className="cartItem__available">
          {maxAmount > 0 ? `Available: ${maxAmount} pcs` : `Not available`}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem, (p, n) => {
  // checking are props changed
  return (
    p.changeSelect === n.changeSelect &&
    p.deleteItem === n.deleteItem &&
    p.itemData === n.itemData &&
    p.selected === n.selected &&
    p.setAmount === n.setAmount &&
    p.cartData.amount === n.cartData.amount &&
    p.cartData.active === n.active &&
    p.cartData.id === n.cartData.id
  );
});

CartItem.propTypes = {
  cartData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
};
