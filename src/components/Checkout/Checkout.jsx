import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import goods from "../../mock/mock";
import "./Checkout.css";
import "./DarkCheckout.css";

const Checkout = ({ currency }) => {
  const amount = useSelector((state) =>
    state.cart.reduce((amount, item) => {
      if (item.active) {
        return amount + 1;
      } else {
        return amount;
      }
    }, 0)
  );
  const sum = useSelector((state) =>
    state.cart.reduce((amount, item) => {
      if (item.active && !isNaN(item.amount)) {
        return amount + goods[item.id].price * item.amount;
      } else {
        return amount;
      }
    }, 0)
  );
  return (
    <div className="cart_checkout">
      <div className="checkout_total">
        <div className="checkout_total_title">Total:</div>
        <div className="checkout_total_info">
          <div className="total_amount">
            {amount > 1 ? `${amount} items` : `${amount} item`}
          </div>
          <div className="total_price">{`${sum} ${currency}`}</div>
        </div>
      </div>
      <button className="btn_checkout">Checkout</button>
    </div>
  );
};

export default React.memo(Checkout);

Checkout.propTypes = {
  currency: PropTypes.string,
};
