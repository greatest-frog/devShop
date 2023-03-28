import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { average } from "../../functions";
import Rating from "../../UI/Rating/Rating";
import AddToCart from "../../UI/AddToCart/AddToCart";
import styles from "./GoodCard.module.css";

const GoodCard = ({ data }) => {
  return (
    <div className={styles.goodCard}>
      <Link to={`/shop/${data.id}`} className={styles.goodCard__link}>
        <img
          src={process.env.PUBLIC_URL + data.src}
          alt={data.name}
          className={styles.goodCard__icon}
        />
      </Link>
      <div className={styles.goodCard__info}>
        <div className={styles.goodCard__product_name}>
          <Link to={`/shop/${data.id}`}>
            {data.name.length > 50 ? data.name.slice(0, 47) + "..." : data.name}
          </Link>
        </div>
        <div className={styles.goodCard__product_rating}>
          <Link to={`/shop/${data.id}/reviews`}>
            <Rating
              rating={average(data.reviews, (element) => element.rating)}
              number={Object.getOwnPropertyNames(data.reviews).length}
            />
          </Link>
        </div>
        <div className={styles.goodCard__product_prices}>
          {data.previousPrice !== undefined && (
            <div
              className={styles.goodCard__product_previous}
            >{`${data.previousPrice}${data.currency}`}</div>
          )}
          <div
            className={styles.goodCard__product_now}
          >{`${data.price}${data.currency}`}</div>
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
