import React from "react";
import PropTypes from "prop-types";

import "./Checkout.css";
import "./DarkCheckout.css";

const Checkout = ({ amount, sum, currency }) => {
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
  getAmount: PropTypes.func,
  getSum: PropTypes.func,
  currency: PropTypes.string,
};
