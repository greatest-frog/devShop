import Rating from "../Rating/Rating";

import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-info">
        <div className="review-author">{review.author}</div>
        <Rating rating={review.rating} needNumber={false} />
      </div>
      <div className="review-title">{review.title}</div>
      <div className="review-text">{review.description}</div>
    </div>
  );
};

export default Review;
