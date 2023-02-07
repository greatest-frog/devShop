import PropTypes from "prop-types";

import Rating from "../Rating/Rating";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-info">
        <div className="review-author">{review?.author && review.author}</div>
        <Rating rating={review.rating} needNumber={false} />
      </div>
      <div className="review-title">{review.title}</div>
      {review.pros && (
        <div className="pros">
          <div className="pros_title">Pros</div>
          <div className="pros_desc">{review.pros}</div>
        </div>
      )}
      {review.cons && (
        <div className="cons">
          <div className="cons_title">Cons</div>
          <div className="cons_desc">{review.cons}</div>
        </div>
      )}
      {review.description && (
        <div className="review-text">
          <div className="review-text_title">Comment</div>
          <div className="review-text_desc">{review.description}</div>
        </div>
      )}
    </div>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};
