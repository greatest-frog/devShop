import React from "react";
import PropTypes from "prop-types";

import "./Rating.css";

const Rating = ({ rating, number, needNumber }) => {
  const getStar = (rating) => {
    if (rating >= 1) {
      return (
        <img
          src={process.env.PUBLIC_URL + "/resources/images/star.png"}
          alt="one star"
        />
      );
    } else if (rating >= 0.5) {
      return (
        <img
          src={process.env.PUBLIC_URL + "/resources/images/half-star.png"}
          alt="half star"
        />
      );
    }
    return (
      <img
        src={process.env.PUBLIC_URL + "/resources/images/unfilled-star.png"}
        alt="no star"
      />
    );
  };

  return (
    <div className="rating">
      <div className="rating_stars">
        {getStar(rating)}
        {getStar(rating - 1)}
        {getStar(rating - 2)}
        {getStar(rating - 3)}
        {getStar(rating - 4)}
      </div>
      {needNumber && <div className="reviews_number">{`${number}`}</div>}
    </div>
  );
};

Rating.defaultProps = {
  number: 1,
  rating: 0,
  needNumber: true,
};

Rating.propTypes = {
  rating: PropTypes.number,
  number: PropTypes.number,
  needNumber: PropTypes.bool,
};

export default React.memo(Rating);
