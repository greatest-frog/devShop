import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import { map } from "../../objectFunctions";
import "./Cart.css";

const Cart = ({ goods, cart, setCart }) => {
  const setAmount = async (id, amount) => {
    const oldCart = JSON.parse(JSON.stringify(cart));
    oldCart[id] = { id, amount, active: cart[id].active };
    setCart(oldCart);
  };

  const deleteItem = async (id) => {
    const oldCart = JSON.parse(JSON.stringify(cart));
    delete oldCart[id];
    setCart(oldCart);
  };

  const changeSelect = (id) => {
    const oldCart = JSON.parse(JSON.stringify(cart));
    oldCart[id] = { id, amount: cart[id].amount, active: !cart[id].active };
    setCart(oldCart);
  };

  const getAmount = () => {
    let k = 0;
    for (const [, item] of Object.entries(cart)) {
      if (item.active) {
        k += item.amount;
      }
    }
    return k;
  };

  const getSum = () => {
    let s = 0;
    for (const [id, item] of Object.entries(cart)) {
      if (item.active) {
        s += item.amount * goods[id].price;
      }
    }
    return s;
  };

  return Object.keys(cart).length ? (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart_window">
        <ul className="cart_items list">
          {map(cart, (item, id) => {
            return (
              <li key={id} className="cart_items_item">
                <CartItem
                  goods={goods}
                  itemData={item}
                  setAmount={(amount) => setAmount(id, amount)}
                  deleteItem={() => deleteItem(id)}
                  selected={item.active}
                  changeSelect={() => changeSelect(id)}
                />
              </li>
            );
          })}
        </ul>
        <Checkout amount={getAmount()} sum={getSum()} currency="$" />
      </div>
    </div>
  ) : (
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
  );
};

export default Cart;

Cart.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  cart: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ),
  setCart: PropTypes.func,
};

Cart.defaultProps = {
  goods: {},
  cart: {},
};
