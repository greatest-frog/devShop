import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import goods from "../../mock/mock";
import { average, sorted } from "../../functions";
import GoodCard from "../../components/GoodCard/GoodCard";
import GoodLine from "../../components/GoodLine/GoodLine";
import styles from "./Shop.module.css";
import classNames from "classnames";

const goodsArray = (() => {
  let temp = [];
  for (let entry of Object.entries(goods)) {
    temp.push(entry[1]);
  }
  return temp;
})();

//sort comparators
const sorts = {
  featured: () => 1,
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

const Shop = () => {
  const [form, setForm] = useState("cards");
  const [sorting, setSorting] = useState("featured");
  const [arrayPosition, setArrayPosition] = useState(0);
  const [displayingArray, setDisplayingArray] = useState([]);

  // sets a new position for the array if there are less than 100 pixels left
  const scrollHandler = (e) => {
    const documentNode = e.target.documentElement;
    if (
      documentNode.scrollHeight - documentNode.scrollTop - window.innerHeight <
        100 &&
      goodsArray.length > arrayPosition * 8
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
    setDisplayingArray(goodsArray.slice(0, 8 * (arrayPosition + 1)));
  }, [arrayPosition]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Items – devShop</title>
      </Helmet>
      <div className="shop">
        <h2>Shop</h2>
        <div className={styles.shop__info}>
          <div className={styles.shop__info_line}>
            <h3>Items</h3>
            <div className={styles.shop__tools}>
              <select
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
                className={styles.button_formChange}
              >
                {form === "cards" && (
                  <div className={styles.button_formChange__svgWrapper}>
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
                  </div>
                )}
                {form === "lines" && (
                  <div className={styles.button_formChange__svgWrapper}>
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
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <ul
          className={classNames(
            form === "cards" ? styles.cards : styles.lines,
            "list"
          )}
        >
          {form === "cards" &&
            sorted(displayingArray, sorts[sorting]).map((good) => (
              <li key={good.id}>
                <GoodCard data={good} />
              </li>
            ))}
          {form === "lines" &&
            sorted(displayingArray, sorts[sorting]).map((good) => (
              <li key={good.id}>
                <GoodLine data={good} />
              </li>
            ))}
        </ul>
      </div>
    </HelmetProvider>
  );
};

export default React.memo(Shop);
