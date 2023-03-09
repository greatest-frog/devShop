import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Counter from "../Counter/Counter";
import "./CartItem.css";
import "./DarkCartItem.css";

const CartItem = ({
  itemData,
  cartData,
  setAmount,
  deleteItem,
  selected,
  changeSelect,
}) => {
  const amount = cartData.amount;

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        name="cartItem"
        value={itemData.id}
        checked={selected}
        onChange={() => changeSelect(itemData.id)}
      />
      <Link to={`/shop/${itemData.id}`}>
        <img
          src={process.env.PUBLIC_URL + itemData.src}
          alt={`${itemData.name}`}
        />
      </Link>
      <div className="cart-item_info">
        <Link to={`/shop/${itemData.id}`}>
          <h3 className="cart-item_name">{itemData.name}</h3>
        </Link>
        <div className="cart-item_info__tools">
          <button
            className="btn_delete"
            onClick={() => deleteItem(itemData.id)}
          >
            Delete
          </button>
          <Counter
            amount={amount}
            max={itemData.number}
            itemId={itemData.id}
            setAmount={setAmount}
          />
        </div>
      </div>

      <div className="cart-item_buy-info">
        <div className="cart-item_price">{`${itemData.price} ${itemData.currency}`}</div>
        <div className="cart-item_available">
          {itemData.number > 0
            ? `Available: ${itemData.number} pcs`
            : `Not available`}
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
  itemData: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  cartData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
  setAmount: PropTypes.func,
  deleteItem: PropTypes.func,
  selected: PropTypes.bool,
  changeSelect: PropTypes.func,
};
