import { useState } from "react";
import PropTypes from "prop-types";
import { average, filter } from "../../objectFunctions";

import Filter from "../Filter/Filter";
import GoodCard from "../GoodCard/GoodCard";
import GoodLine from "../GoodLine/GoodLine";
import { sorted } from "../../functions";
import "./Shop.css";

//sort comparators
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
  toHigh: (a, b) => {
    if (a.price && b.price) {
      return b.price - a.price;
    } else if (a.price) {
      return 1;
    } else if (b.price) {
      return -1;
    } else {
      return 0;
    }
  },
  toLow: (a, b) => {
    if (a.price && b.price) {
      return a.price - b.price;
    } else if (a.price) {
      return 1;
    } else if (b.price) {
      return -1;
    } else {
      return 0;
    }
  },
  byReview: (a, b) => {
    if (a.reviews && b.reviews) {
      let aAvg = average(a.reviews, (element) => element.rating),
        bAvg = average(b.reviews, (element) => element.rating);
      if (aAvg === bAvg) {
        return (
          Object.getOwnPropertyNames(a.reviews).length -
          Object.getOwnPropertyNames(b.reviews).length
        );
      } else {
        return aAvg - bAvg;
      }
    } else if (a.reviews) {
      return 1;
    } else if (b.reviews) {
      return -1;
    } else {
      return 0;
    }
  },
};

const Shop = ({ goods, addGoods }) => {
  const [filters, setFilters] = useState({});
  const [form, setForm] = useState("cards");
  const [filtering, setFiltering] = useState(false);
  const [sorting, setSorting] = useState("featured");

  const fitFilters = (obj) => {
    for (const [filterProp, value] of Object.entries(filters)) {
      let pass = false;
      if (filterProp === "special") {
        if (obj.hasOwnProperty("special")) {
          for (let e of value) {
            if (!obj.special.has(e)) {
              pass = true;
            } else {
              pass = false;
              break;
            }
          }
        }
      } else if (filterProp === "priceRange") {
        if (
          obj.hasOwnProperty("price") &&
          value[0] <= obj.price &&
          (value[1] === "Inf" || obj.price <= value[1])
        ) {
          pass = true;
        }
      } else if (value instanceof Array) {
        if (obj.hasOwnProperty(filterProp)) {
          if (value.length === 0) {
            pass = true;
          }
          for (let e of value) {
            if (obj[filterProp] === e) {
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

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="shop_info">
        <div className="shop_info_line">
          <h3>Items</h3>
          <div className="shop_tools">
            <select
              name="sorting"
              id="sorting"
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="toHigh">Price: Low to High</option>
              <option value="toLow">Price: High to Low</option>
              <option value="byReview">Avg. Customer Review</option>
              <option value="byDate">Newest Arrivals</option>
            </select>
            <button
              onClick={() => {
                if (form === "cards") {
                  setForm("lines");
                } else {
                  setForm("cards");
                }
              }}
              className="btn_form-changer"
            >
              {form === "cards" && (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path
                      d="M7.04,11.5c-0.85,0-1.54-0.69-1.54-1.54V7.04c0-0.85,0.69-1.54,1.54-1.54h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93
                 c0,0.85-0.69,1.54-1.54,1.54H7.04z"
                    />
                    <path
                      d="M32.96,6C33.53,6,34,6.47,34,7.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,11,6,10.53,6,9.96V7.04C6,6.47,6.47,6,7.04,6
                 H32.96 M32.96,5H7.04C5.91,5,5,5.91,5,7.04v2.93C5,11.09,5.91,12,7.04,12h25.93C34.09,12,35,11.09,35,9.96V7.04
                 C35,5.91,34.09,5,32.96,5L32.96,5z"
                    />
                  </g>
                  <g>
                    <path
                      d="M7.04,23c-0.85,0-1.54-0.69-1.54-1.54v-2.93C5.5,17.69,6.19,17,7.04,17h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93
                 c0,0.85-0.69,1.54-1.54,1.54H7.04z"
                    />
                    <path
                      d="M32.96,17.5c0.57,0,1.04,0.47,1.04,1.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,22.5,6,22.03,6,21.46v-2.93
                 c0-0.57,0.47-1.04,1.04-1.04H32.96 M32.96,16.5H7.04C5.91,16.5,5,17.41,5,18.54v2.93c0,1.12,0.91,2.04,2.04,2.04h25.93
                 c1.12,0,2.04-0.91,2.04-2.04v-2.93C35,17.41,34.09,16.5,32.96,16.5L32.96,16.5z"
                    />
                  </g>
                  <g>
                    <path
                      d="M7.04,34.5c-0.85,0-1.54-0.69-1.54-1.54v-2.93c0-0.85,0.69-1.54,1.54-1.54h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93
                 c0,0.85-0.69,1.54-1.54,1.54H7.04z"
                    />
                    <path
                      d="M32.96,29c0.57,0,1.04,0.47,1.04,1.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,34,6,33.53,6,32.96v-2.93
                 C6,29.47,6.47,29,7.04,29H32.96 M32.96,28H7.04C5.91,28,5,28.91,5,30.04v2.93C5,34.09,5.91,35,7.04,35h25.93
                 c1.12,0,2.04-0.91,2.04-2.04v-2.93C35,28.91,34.09,28,32.96,28L32.96,28z"
                    />
                  </g>
                </svg>
              )}
              {form === "lines" && (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path
                      d="M6.79,16.75c-0.85,0-1.54-0.69-1.54-1.54V6.79c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43
                 c0,0.85-0.69,1.54-1.54,1.54H6.79z"
                    />
                    <path
                      d="M15.21,5.75c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04H6.79c-0.57,0-1.04-0.47-1.04-1.04V6.79
                 c0-0.57,0.47-1.04,1.04-1.04H15.21 M15.21,4.75H6.79c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43
                 c1.12,0,2.04-0.91,2.04-2.04V6.79C17.25,5.66,16.34,4.75,15.21,4.75L15.21,4.75z"
                    />
                  </g>
                  <g>
                    <path
                      d="M24.29,16.75c-0.85,0-1.54-0.69-1.54-1.54V6.79c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43
                 c0,0.85-0.69,1.54-1.54,1.54H24.29z"
                    />
                    <path
                      d="M32.71,5.75c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04h-8.43c-0.57,0-1.04-0.47-1.04-1.04V6.79
                 c0-0.57,0.47-1.04,1.04-1.04H32.71 M32.71,4.75h-8.43c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43
                 c1.12,0,2.04-0.91,2.04-2.04V6.79C34.75,5.66,33.84,4.75,32.71,4.75L32.71,4.75z"
                    />
                  </g>
                  <g>
                    <path
                      d="M24.29,34.25c-0.85,0-1.54-0.69-1.54-1.54v-8.43c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43
                 c0,0.85-0.69,1.54-1.54,1.54H24.29z"
                    />
                    <path
                      d="M32.71,23.25c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04h-8.43c-0.57,0-1.04-0.47-1.04-1.04v-8.43
                 c0-0.57,0.47-1.04,1.04-1.04H32.71 M32.71,22.25h-8.43c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43
                 c1.12,0,2.04-0.91,2.04-2.04v-8.43C34.75,23.16,33.84,22.25,32.71,22.25L32.71,22.25z"
                    />
                  </g>
                  <g>
                    <path
                      d="M6.79,34.25c-0.85,0-1.54-0.69-1.54-1.54v-8.43c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43
                 c0,0.85-0.69,1.54-1.54,1.54H6.79z"
                    />
                    <path
                      d="M15.21,23.25c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04H6.79c-0.57,0-1.04-0.47-1.04-1.04v-8.43
                 c0-0.57,0.47-1.04,1.04-1.04H15.21 M15.21,22.25H6.79c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43
                 c1.12,0,2.04-0.91,2.04-2.04v-8.43C17.25,23.16,16.34,22.25,15.21,22.25L15.21,22.25z"
                    />
                  </g>
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                if (filtering) {
                  setFiltering(false);
                } else {
                  setFiltering(true);
                }
              }}
              className="btn_filter"
            >
              Filters
              {
                <img
                  src={
                    process.env.PUBLIC_URL + "/resources/images/arrow-down.png"
                  }
                  alt=""
                  className={filtering ? "arrow-up arrow" : "arrow-down arrow"}
                />
              }
            </button>
          </div>
        </div>
        <Filter
          filters={filters}
          setFilters={setFilters}
          className={`${!filtering ? "disabled" : ""}`}
        />
      </div>
      {/* TODO pagination */}
      <ul className={`shop_items ${form === "cards" ? "cards" : "lines"} list`}>
        {form === "cards" &&
          sorted(
            Object.entries(filter(goods, (good) => fitFilters(good))).map(
              (ent) => ent[1]
            ),
            sorts[sorting]
          ).map((good) => (
            <li key={good.id}>
              <GoodCard data={good} addGoods={addGoods} />
            </li>
          ))}
        {form === "lines" &&
          sorted(
            Object.entries(filter(goods, (good) => fitFilters(good))).map(
              (ent) => ent[1]
            ),
            sorts[sorting]
          ).map((good) => (
            <li key={good.id}>
              <GoodLine data={good} addGoods={addGoods} />
            </li>
          ))}
      </ul>
    </div>
  );
};

Shop.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.number,
      ])
    )
  ),
  addGoods: PropTypes.func,
};

export default Shop;
