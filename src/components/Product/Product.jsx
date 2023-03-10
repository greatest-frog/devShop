import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";
import { useLocation, useParams, Link, Navigate } from "react-router-dom";

import goods from "../../mock/mock";
import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import Review from "../Review/Review";
import Characteristics from "../Characteristics/Characteristics";
import { average } from "../../objectFunctions";
import "./Product.css";
import "./DarkProduct.css";

const Product = () => {
  const product = goods[useParams().productId];
  const location = useLocation();

  if (!product) {
    return <Navigate to="/404" />;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${product.name} – devShop`}</title>
      </Helmet>
      <div className="product">
        <div className="product_main">
          <h1>{product.name}</h1>
          <img
            src={process.env.PUBLIC_URL + product.src}
            alt={product.name}
            className="product-image"
          />
          <Link to={`${location.pathname}/reviews`}>
            <Rating
              rating={average(product.reviews, (element) => element.rating)}
              number={Object.getOwnPropertyNames(product.reviews).length}
            />
          </Link>
          <div className="product-prices">
            {product.previousPrice !== undefined && (
              <div className="product-price_previous">{`${product.previousPrice}${product.currency}`}</div>
            )}
            <div className="product-price">{`${product.price}${product.currency}`}</div>
          </div>
          <AddToCart productId={product.id} />
        </div>
        <div className="product_information">
          <div className="product_description">
            <h2>Description</h2>
            <article>{product.description}</article>
          </div>
          <div className="product_characteristics">
            <h2>Characteristics</h2>
            <Characteristics product={product} />
          </div>
          <div className="product_reviews">
            <h2>Reviews</h2>
            {Object.keys(product.reviews).length && (
              <Review
                review={product.reviews[Object.keys(product.reviews)[0]]}
              />
            )}
            <div className="btn-wrapper">
              <div className="btn-link">
                <Link to={`${location.pathname}/reviews`}>
                  View more reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Product;

Product.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  addGoods: PropTypes.func,
};
