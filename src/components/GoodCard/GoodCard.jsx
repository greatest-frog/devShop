import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { average } from "../../objectFunctions";
import Rating from "../Rating/Rating";
import AddToCart from "../AddToCart/AddToCart";
import "./GoodCard.css";
import "./DarkGoodCard.css";

const GoodCard = ({ data }) => {
  return (
    <div className="good-card">
      <Link to={`/shop/${data.id}`} className="good-card_photo-link">
        <img
          src={process.env.PUBLIC_URL + data.src}
          alt={data.name}
          className="good-card_icon"
        />
      </Link>
      <div className="good-card_info">
        <div className="product-name">
          <Link to={`/shop/${data.id}`}>
            {data.name.length > 50 ? data.name.slice(0, 47) + "..." : data.name}
          </Link>
        </div>
        <div className="product-rating">
          <Link to={`/shop/${data.id}/reviews`}>
            <Rating
              rating={average(data.reviews, (element) => element.rating)}
              number={Object.getOwnPropertyNames(data.reviews).length}
            />
          </Link>
        </div>
        <div className="product-prices">
          {data.previousPrice !== undefined && (
            <div className="product-price_previous">{`${data.previousPrice}${data.currency}`}</div>
          )}
          <div className="product-price">{`${data.price}${data.currency}`}</div>
        </div>
        <AddToCart productId={data.id} />
      </div>
    </div>
  );
};

export default React.memo(GoodCard);

GoodCard.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
};
