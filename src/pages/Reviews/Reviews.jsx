import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import classNames from "classnames";

import goods from "../../mock/mock";
import { sorted } from "../../functions";
import Review from "../../components/Review/Review";
import Rating from "../../UI/Rating/Rating";
import styles from "./Reviews.module.css";

const sorts = {
  featured: (a, b) => 1,
  byDate: (a, b) => {
    if (a.date && b.date) {
      let aDate = new Date(a.date),
        bDate = new Date(b.date);
      return aDate.getTime() - bDate.getTime();
    } else if (a.date) {
      return 1;
    } else if (b.date) {
      return -1;
    } else {
      return 0;
    }
  },
  ascending: (a, b) => {
    if (a.rating && b.rating) {
      return a.rating - b.rating;
    } else if (a.rating) {
      return 1;
    } else if (b.rating) {
      return -1;
    } else {
      return 0;
    }
  },
  descending: (a, b) => {
    if (a.rating && b.rating) {
      return b.rating - a.rating;
    } else if (a.rating) {
      return 1;
    } else if (b.rating) {
      return -1;
    } else {
      return 0;
    }
  },
};

const Reviews = () => {
  const params = useParams();

  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState("featured");
  const [arrayPosition, setArrayPosition] = useState(0);
  const [displayingArray, setDisplayingArray] = useState([]);

  const product = goods[params.productId];
  const reviews = Object.entries(product.reviews).map((entry) => entry[1]);

  // sets a new position for the array if there are less than 100 pixels left
  const scrollHandler = (e) => {
    const documentNode = e.target.documentElement;
    if (
      documentNode.scrollHeight - documentNode.scrollTop - window.innerHeight <
        100 &&
      reviews?.length > arrayPosition * 8
    ) {
      setArrayPosition((prev) => prev + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // makes a slice of the displayed elements
  useEffect(() => {
    setDisplayingArray(reviews?.slice(0, 8 * (arrayPosition + 1)));
  }, [arrayPosition, reviews]);

  if (!product) {
    return <Navigate to="/404" />;
  }

  const fitFilters = (obj) => {
    for (const [filterProp, value] of Object.entries(filters)) {
      let pass = false;
      if (value instanceof Array) {
        if (obj.hasOwnProperty(filterProp)) {
          if (value.length === 0) {
            pass = true;
          }
          for (let e of value) {
            if (obj[filterProp].toString() === e) {
              pass = true;
              break;
            }
          }
        }
      } else {
        if (obj.hasOwnProperty(filterProp) && obj[filterProp] === value) {
          pass = true;
        }
      }
      if (!pass) {
        return false;
      }
    }
    return true;
  };

  const handleArrayInput = async (e, name) => {
    const filtersCopy = await JSON.parse(JSON.stringify(filters));
    if (filtersCopy.hasOwnProperty(name)) {
      if (filtersCopy[name].includes(e.target.value)) {
        filtersCopy[name] = filtersCopy[name].filter(
          (el) => el !== e.target.value
        );
      } else {
        filtersCopy[name] = filtersCopy[name].concat([e.target.value]);
      }
    } else {
      filtersCopy[name] = [e.target.value];
    }

    setFilters(filtersCopy);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Reviews for ${product.name} – devShop`}</title>
      </Helmet>
      <div className={styles.reviews}>
        <h2 className={styles.reviews__heading_first}>
          <Link to={`/shop/${params.productId}`}>{product.name}</Link> &ndash;
          Reviews
        </h2>
        <div className={styles.reviews__info_line}>
          <h3 className={styles.reviews__heading_second}>
            {Object.keys(product.reviews).length === 1
              ? `1 review`
              : `${Object.keys(product.reviews).length} reviews`}
          </h3>
          <div className="reviews_tools">
            <select
              id="reviewSorting"
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="ascending">By ascending rating</option>
              <option value="descending">By descending rating</option>
              <option value="byDate">Newest reviews</option>
            </select>
          </div>
        </div>
        <div className="reviews__filter">
          <ul className={classNames(styles.reviews__filterList, "list")}>
            <li className="list__item_rating">
              <label className={styles.rating_label}>
                <input
                  type="checkbox"
                  name="rating"
                  id="oneStar"
                  value={1}
                  onChange={(e) => handleArrayInput(e, "rating")}
                />
                <Rating rating={1} needNumber={false} />
              </label>
            </li>
            <li className="list_item__rating">
              <label className={styles.rating_label}>
                <input
                  type="checkbox"
                  name="rating"
                  id="twoStar"
                  value={2}
                  onChange={(e) => handleArrayInput(e, "rating")}
                />
                <Rating rating={2} needNumber={false} />
              </label>
            </li>
            <li className="list_item__rating">
              <label className={styles.rating_label}>
                <input
                  type="checkbox"
                  name="rating"
                  id="threeStar"
                  value={3}
                  onChange={(e) => handleArrayInput(e, "rating")}
                />
                <Rating rating={3} needNumber={false} />
              </label>
            </li>
            <li className="list_item__rating">
              <label className={styles.rating_label}>
                <input
                  type="checkbox"
                  name="rating"
                  id="fourStar"
                  value={4}
                  onChange={(e) => handleArrayInput(e, "rating")}
                />
                <Rating rating={4} needNumber={false} />
              </label>
            </li>

            <li className="list_item__rating">
              <label className={styles.rating_label}>
                <input
                  type="checkbox"
                  name="rating"
                  id="fiveStar"
                  value={5}
                  onChange={(e) => handleArrayInput(e, "rating")}
                />
                <Rating rating={5} needNumber={false} />
              </label>
            </li>
          </ul>
        </div>
        <ul className={classNames(styles.reviews__list, "list")}>
          {sorted(
            displayingArray.filter((review) => fitFilters(review)),
            sorts[sorting]
          ).map((review) => (
            <li key={review.id} className={styles.reviews__list_item}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </div>
    </HelmetProvider>
  );
};

export default Reviews;
