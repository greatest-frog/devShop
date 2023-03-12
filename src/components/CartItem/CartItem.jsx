import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Counter from "../Counter/Counter";
import "./CartItem.css";
import "./DarkCartItem.css";
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
    <div className="cart-item">
      <input
        type="checkbox"
        name="cartItem"
        checked={cartData.active}
        onChange={() => dispatch(changeSelect(cartData.id))}
      />
      <Link to={`/shop/${cartData.id}`}>
        <img src={process.env.PUBLIC_URL + src} alt={`${itemName}`} />
      </Link>
      <div className="cart-item_info">
        <Link to={`/shop/${cartData.id}`}>
          <h3 className="cart-item_name">{itemName}</h3>
        </Link>
        <div className="cart-item_info__tools">
          <button
            className="btn_delete"
            onClick={() => dispatch(deleteItem(cartData.id))}
          >
            Delete
          </button>
          <Counter maxAmount={maxAmount} itemId={cartData.id} />
        </div>
      </div>

      <div className="cart-item_buy-info">
        <div className="cart-item_price">{`${price} ${currency}`}</div>
        <div className="cart-item_available">
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
