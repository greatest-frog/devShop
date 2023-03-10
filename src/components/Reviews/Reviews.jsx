import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

import { sorted } from "../../functions";
import Review from "../Review/Review";
import Rating from "../Rating/Rating";
import "./Reviews.css";

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

const Reviews = ({ goods }) => {
  const params = useParams();

  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState("featured");

  const product = goods[params.productId];

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
      <div className="reviews">
        <h1>
          <Link to={`/shop/${params.productId}`}>{product.name}</Link> &ndash;
          Reviews
        </h1>

        <div className="reviews_info_line">
          <h2>
            {Object.keys(product.reviews).length === 1
              ? `1 review`
              : `${Object.keys(product.reviews).length} reviews`}
          </h2>
          <div className="reviews_tools">
            <select
              name="reviewSorting"
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
        <div className="reviews-filter">
          <ul className="list reviews-filter_list">
            <li className="list_item__rating">
              <label>
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
              <label>
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
              <label>
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
              <label>
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
              <label>
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
        {/* TODO pagination */}
        <ul className="reviews_list list">
          {sorted(
            Object.entries(product.reviews)
              .map((entry) => entry[1])
              .filter((review) => fitFilters(review)),
            sorts[sorting]
          ).map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </div>
    </HelmetProvider>
  );
};

export default Reviews;

Reviews.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.number,
      ])
    )
  ),
};
