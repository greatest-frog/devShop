import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./GoodCard.css";

const GoodCard = ({ data }) => {
  const average = (obj, rule) => {
    let k = 0;
    let totalRating = 0;
    for (const [key, data] of Object.entries(obj)) {
      k += 1;
      totalRating += rule(data);
    }
    return totalRating / k;
  };

  return (
    <div className="good-card">
      <Link to={`/shop/${data.id}`} className="good-card_photo-link">
        <img src={data.src} alt={data.name} className="good-card_icon" />
      </Link>
      <div className="good-card_info">
        <div className="product-name">
          <Link to={`/shop/${data.id}`}>{data.name}</Link>
        </div>
        <div className="product-rating">
          <Rating rating={average(data.reviews, (element) => element.rating)} />
        </div>
        <div className="product-prices">
          {data.previousPrice !== undefined && (
            <div className="product-price_previous">{`${data.previousPrice}${data.currency}`}</div>
          )}
          <div className="product-price">{`${data.price}${data.currency}`}</div>
        </div>
        {/* TODO onClick function */}
        <button className="btn_add-to-cart">
          <img src="./shop/resources/images/cart-plus.png" alt="add to cart" />
        </button>
      </div>
    </div>
  );
};

export default GoodCard;
