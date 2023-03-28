import PropTypes from "prop-types";

import Rating from "../../UI/Rating/Rating";
import styles from "./Review.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.review__info}>
        <div className={styles.review__author}>
          {review?.author && review.author}
        </div>
        <Rating rating={review.rating} needNumber={false} />
      </div>
      <div className={styles.review__title}>{review.title}</div>
      {review.pros && (
        <div className="review__pros">
          <div className={styles.review__pros_title}>Pros</div>
          <div className="review__pros_desc">{review.pros}</div>
        </div>
      )}
      {review.cons && (
        <div className="review__cons">
          <div className={styles.review__cons_title}>Cons</div>
          <div className="review__cons_desc">{review.cons}</div>
        </div>
      )}
      {review.description && (
        <div className="review__text">
          <div className={styles.review__text_title}>Comment</div>
          <div className="review__text_desc">{review.description}</div>
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
