import PropTypes from "prop-types";

import "./CartIcon.css";

const CartIcon = ({ goodsNumber }) => {
  return (
    <div className="cart-icon" data-testid="cart-icon">
      <img
        src="https://greatest-frog.github.io/shop/resources/images/cart.png"
        alt="Cart"
      />
      <div className="goods-number">{goodsNumber}</div>
    </div>
  );
};

CartIcon.propTypes = {
  goodsNumber: PropTypes.number,
};

export default CartIcon;
