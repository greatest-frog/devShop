import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { addItem } from "../../reducers/cartReducer";
import "./AddToCart.css";
import "./DarkAddToCart.css";

const AddToCart = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn_add-to-cart"
      onClick={() => dispatch(addItem(productId))}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z" />
      </svg>
    </button>
  );
};

export default React.memo(AddToCart);

AddToCart.propTypes = {
  productId: PropTypes.string,
};
