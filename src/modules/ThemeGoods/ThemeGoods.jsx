import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import goods from "../../mock/mock";
import GoodCard from "../../components/GoodCard/GoodCard";
import styles from "./ThemeGoods.module.css";
import classNames from "classnames";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const ThemeGoods = ({ name }) => {
  const ref = useRef();

  const [slider, setSlider] = useState({
    position: 0,
    scrollX: 0,
    clientX: 0,
    isMoving: false,
    lastScrollX: 0,
  });

  const themeGoods = Array.from(
    Object.entries(goods)
      .filter((entry) => entry[1].special.has(name.toLowerCase()))
      .map((entry) => entry[1])
  );

  const enableButton = (position) => {
    if (window.matchMedia("(max-width: 850px)").matches) {
      return themeGoods.length - 2 > position;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return themeGoods.length - 3 > position;
    }
    return themeGoods.length - 4 > position;
  };

  const getShift = (position) => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return position * 155;
    } else if (window.matchMedia("(max-width: 850px)").matches) {
      return position === 0 ? -10 : -10 + position * 262;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return position * 262;
    }
    return position !== 0 && position === themeGoods.length - 4
      ? (position - 1) * 262 + 130
      : position * 262;
  };

  const onMouseDown = (e) => {
    if (ref && ref.current && ref.current === e.target && !slider.isMoving) {
      setSlider({ ...slider, clientX: e.clientX, isMoving: true });
    }
  };

  const onMouseUp = (e) => {
    if (slider.isMoving) {
      setSlider({ ...slider, isMoving: false });
      e.stopPropagation();
      e.preventDefault();
    }
  };
  //set new position for array slider
  const onMouseMove = (e) => {
    if (
      isTouchDevice() &&
      ref &&
      ref.current &&
      ref.current.contains(e.target) &&
      slider.isMoving
    ) {
      const { scrollX, clientX } = slider;
      const newScrollX = scrollX - e.clientX + clientX;
      ref.current.scrollLeft = newScrollX;
      setSlider({ ...slider, scrollX: newScrollX, clientX: e.clientX });
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div className={styles.themeGoods}>
      <div className={styles.themeGoods__name}>
        <h3 className={styles.themeGoods__heading}>{name}</h3>
      </div>
      <ul
        className={classNames(styles.themeGoods__list, "list")}
        ref={ref}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      >
        {themeGoods.map((data) => (
          <li key={data.id}>
            <GoodCard data={data} />
          </li>
        ))}
      </ul>
      {!isTouchDevice() && slider.position > 0 && (
        <div className={styles.mover_left}>
          <button
            onClick={() => {
              ref.current.scrollTo({
                left: getShift(slider.position - 1),
                behavior: "smooth",
              });
              setSlider({
                ...slider,
                scrollX: getShift(slider.position - 1),
                position: slider.position - 1,
              });
            }}
            className={styles.button_mover}
          >
            <img
              src={process.env.PUBLIC_URL + "/resources/images/mover-left.png"}
              alt="move to the left"
            />
          </button>
        </div>
      )}
      {!isTouchDevice() && enableButton(slider.position) && (
        <div className={styles.mover_right}>
          <button
            onClick={() => {
              ref.current.scrollTo({
                left: getShift(slider.position + 1),
                behavior: "smooth",
              });
              setSlider({
                ...slider,
                scrollX: getShift(slider.position + 1),
                position: slider.position + 1,
              });
            }}
            className={styles.button_mover}
          >
            <img
              src={process.env.PUBLIC_URL + "/resources/images/mover-right.png"}
              alt="move to the right"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(ThemeGoods);

ThemeGoods.propTypes = {
  name: PropTypes.string,
};
