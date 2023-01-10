import "./Rating.css";

const Rating = ({ rating }) => {
  const getStar = (rating) => {
    if (rating >= 1) {
      return <img src="./shop/resources/images/star.png" alt="" />;
    } else if (rating >= 0.5) {
      return <img src="./shop/resources/images/half-star.png" alt="" />;
    }
    return <img src="./shop/resources/images/unfilled-star.png" alt="" />;
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
      <div className="rating_numeric">{`${rating}/5`}</div>
    </div>
  );
};

export default Rating;
