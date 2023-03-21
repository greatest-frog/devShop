import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { setItemAmount } from "../../reducers/cartReducer";
import styles from "./Counter.module.css";

const Counter = ({ maxAmount, itemId }) => {
  const amount = useSelector(
    (state) => state.cart.find((item) => item.id === itemId).amount
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.counter}>
      <button
        className={styles.button_minus}
        disabled={amount === 1}
        onClick={() => dispatch(setItemAmount(itemId, amount - 1))}
      >
        -
      </button>
      <input
        type="number"
        className={styles.counter__input}
        min={1}
        max={maxAmount}
        value={isNaN(amount) ? "" : amount}
        onChange={(e) => {
          const count = parseInt(e.target.value);
          if (count < 1) {
            dispatch(setItemAmount(itemId, 1));
          } else if (count > maxAmount) {
            dispatch(setItemAmount(itemId, maxAmount));
          } else {
            dispatch(setItemAmount(itemId, count));
          }
        }}
      />
      <button
        className={styles.button_plus}
        disabled={amount === maxAmount}
        onClick={() => dispatch(setItemAmount(itemId, amount + 1))}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  maxAmount: PropTypes.number,
  itemId: PropTypes.string,
};
