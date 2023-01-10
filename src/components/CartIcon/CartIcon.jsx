import "./CartIcon.css";

const CartIcon = ({ goodsNumber }) => {
  return (
    <div className="cart-icon" data-testid="cart-icon">
      <img src="./shop/resources/images/cart.png" alt="Cart" />
      <div className="goods-number">{goodsNumber}</div>
    </div>
  );
};

export default CartIcon;
