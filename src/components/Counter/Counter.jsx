import PropTypes from "prop-types";

import "./Counter.css";

const Counter = ({ amount, max, itemId, setAmount }) => {
  return (
    <div className="counter">
      <button
        className="btn_counter-minus"
        disabled={amount === 1}
        onClick={() => setAmount(amount - 1)}
      >
        -
      </button>
      <input
        type="number"
        name="itemAmount"
        min={1}
        max={max}
        value={amount}
        onChange={(e) => {
          const count = parseInt(e.target.value);
          if (isNaN(count)) {
            setAmount(itemId, count);
          } else {
            if (count < 1) {
              setAmount(1);
            } else if (count > max) {
              setAmount(max);
            } else {
              setAmount(count);
            }
          }
        }}
      />
      <button
        className="btn_counter-plus"
        disabled={amount === max}
        onClick={() => setAmount(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  amount: PropTypes.number,
  max: PropTypes.number,
  itemId: PropTypes.string,
  setAmount: PropTypes.func,
};
