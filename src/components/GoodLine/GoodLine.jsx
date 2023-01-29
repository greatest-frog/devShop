import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { average } from "../../objectFunctions";
import Rating from "../Rating/Rating";
import AddToCart from "../AddToCart/AddToCart";
import "./GoodLine.css";

const GoodLine = ({ data }) => {
  return (
    <div className="good-line">
      <Link to={`/shop/${data.id}`} className="good-line_photo-link">
        <img src={data.src} alt={data.name} className="good-line_icon" />
      </Link>
      <div className="good-line_info">
        <div className="product-name">
          <Link to={`/shop/${data.id}`}>{data.name}</Link>
        </div>
        <div className="product-rating">
          <Rating
            rating={average(data.reviews, (element) => element.rating)}
            number={Object.getOwnPropertyNames(data.reviews).length}
          />
        </div>
        <div className="product-prices">
          {data.previousPrice !== undefined && (
            <div className="product-price_previous">{`${data.previousPrice}${data.currency}`}</div>
          )}
          <div className="product-price">{`${data.price}${data.currency}`}</div>
        </div>
        <AddToCart />
      </div>
    </div>
  );
};

GoodLine.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
};

export default GoodLine;
