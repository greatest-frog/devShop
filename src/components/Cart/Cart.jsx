import React, { useCallback, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import { map } from "../../objectFunctions";
import "./Cart.css";

const Cart = ({ cart, setCart, goods }) => {
  const cartRef = useRef();
  cartRef.current = cart;

  const setAmount = useCallback(
    (id, amount) => {
      setCart(
        Object.assign({}, cartRef.current, {
          [id]: { id, amount, active: cartRef.current[id].active },
        })
      );
    },
    [setCart]
  );

  const deleteItem = useCallback(
    (id) => {
      const { [id]: deleted, newCart } = cartRef.current;
      setCart(newCart);
    },
    [setCart]
  );

  const changeSelect = useCallback(
    (id) => {
      setCart(
        Object.assign({}, cartRef.current, {
          [id]: {
            id,
            amount: cartRef.current[id].amount,
            active: !cartRef.current[id].active,
          },
        })
      );
    },
    [setCart]
  );

  const getAmount = useCallback(() => {
    let k = 0;
    for (const [, item] of Object.entries(cartRef.current)) {
      if (item.active) {
        k += item.amount;
      }
    }
    return k;
  }, []);

  const getSum = useCallback(() => {
    let s = 0;
    for (const [id, item] of Object.entries(cartRef.current)) {
      if (item.active) {
        s += item.amount * goods[id].price;
      }
    }
    return s;
  }, [goods]);

  return Object.keys(cart).length ? (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart_window">
          <ul className="cart_items list">
            {map(cart, (item) => {
              return (
                <li key={item.id} className="cart_items_item">
                  <CartItem
                    cartData={item}
                    itemData={goods[item.id]}
                    setAmount={setAmount}
                    deleteItem={deleteItem}
                    selected={item.active}
                    changeSelect={changeSelect}
                  />
                </li>
              );
            })}
          </ul>
          <Checkout amount={getAmount()} sum={getSum()} currency="$" />
        </div>
      </div>
    </HelmetProvider>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>Cart – devShop</title>
      </Helmet>
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
    </HelmetProvider>
  );
};

export default React.memo(Cart);

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
