import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useParams, Link, Navigate } from "react-router-dom";

import goods from "../../mock/mock";
import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import Review from "../Review/Review";
import Characteristics from "../Characteristics/Characteristics";
import { average } from "../../functions";
import styles from "./Product.module.css";

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
      <div className={styles.product}>
        <div className={styles.product__main}>
          <h2 className={styles.product__heading_first}>{product.name}</h2>
          <img
            src={process.env.PUBLIC_URL + product.src}
            alt={product.name}
            className={styles.product__image}
          />
          <Link
            to={`${location.pathname}/reviews`}
            className={styles.product__main_link}
          >
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
        <div className={styles.product__info}>
          <div className="product__info_description">
            <h3 className={styles.product__heading_second}>Description</h3>
            <article className={styles.product__info_article}>
              {product.description}
            </article>
          </div>
          <div className="product_characteristics">
            <h3>Characteristics</h3>
            <Characteristics product={product} />
          </div>
          <div className={styles.product__reviews}>
            <h3 className={styles.product__heading_second}>Reviews</h3>
            {Object.keys(product.reviews).length && (
              <Review
                review={product.reviews[Object.keys(product.reviews)[0]]}
              />
            )}
            <div className={styles.product__link_wrapper}>
              <Link
                to={`${location.pathname}/reviews`}
                className={styles.product__link}
              >
                View more reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Product;
