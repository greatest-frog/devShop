import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { average } from "../../functions";
import Rating from "../../UI/Rating/Rating";
import AddToCart from "../../UI/AddToCart/AddToCart";
import styles from "./GoodLine.module.css";

const GoodLine = ({ data }) => {
  return (
    <div className={styles.goodLine}>
      <Link to={`/shop/${data.id}`} className="good-line_photo-link">
        <img
          src={process.env.PUBLIC_URL + data.src}
          alt={data.name}
          className={styles.goodLine__icon}
        />
      </Link>
      <div className={styles.goodLine__info}>
        <div className={styles.goodLine__product_name}>
          <Link to={`/shop/${data.id}`}>
            {data.name.length > 60 ? data.name.slice(0, 57) + "..." : data.name}
          </Link>
        </div>
        <div className={styles.goodLine__product_rating}>
          <Link to={`/shop/${data.id}/reviews`}>
            <Rating
              rating={average(data.reviews, (element) => element.rating)}
              number={Object.getOwnPropertyNames(data.reviews).length}
            />
          </Link>
        </div>
        <div className={styles.goodLine__product_prices}>
          {data.previousPrice !== undefined && (
            <div
              className={styles.goodLine__product_previous}
            >{`${data.previousPrice}${data.currency}`}</div>
          )}
          <div className="goodLine__product_now">{`${data.price}${data.currency}`}</div>
        </div>
        <div className={styles.goodLine__button_wrapper}>
          <AddToCart productId={data.id} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(GoodLine);

GoodLine.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
};
