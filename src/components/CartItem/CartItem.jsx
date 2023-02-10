import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Counter from "../Counter/Counter";
import "./CartItem.css";

const CartItem = ({
  goods,
  itemData,
  setAmount,
  deleteItem,
  selected,
  changeSelect,
}) => {
  const item = goods[itemData.id];
  const amount = itemData.amount;

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        name="cartItem"
        value={item.id}
        checked={selected}
        onChange={changeSelect}
      />
      <Link to={`/shop/${itemData.id}`}>
        <img src={item.src} alt={`${item.name}`} />
      </Link>
      <div className="cart-item_info">
        <Link to={`/shop/${itemData.id}`}>
          <h3 className="cart-item_name">{item.name}</h3>
        </Link>
        <div className="cart-item_info__tools">
          <button className="btn_delete" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
          <Counter
            amount={amount}
            max={item.number}
            itemId={item.id}
            setAmount={setAmount}
          />
        </div>
      </div>

      <div className="cart-item_buy-info">
        <div className="cart-item_price">{`${item.price} ${item.currency}`}</div>
        <div className="cart-item_available">
          {item.number > 0 ? `Available: ${item.number} pcs` : `Not available`}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  itemData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ),
  setAmount: PropTypes.func,
  deleteItem: PropTypes.func,
  selected: PropTypes.bool,
};

CartItem.defaultProps = {
  selected: true,
};
