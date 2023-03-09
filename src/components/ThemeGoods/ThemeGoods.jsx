import React, { useState, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { filter, map } from "../../objectFunctions";

import GoodCard from "../GoodCard/GoodCard";
import "./ThemeGoods.css";

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

const ThemeGoods = ({ name, goods, addGoods }) => {
  const ref = useRef();

  const [slider, setSlider] = useState({
    position: 0,
    scrollX: 0,
    clientX: 0,
    isMoving: false,
    lastScrollX: 0,
  });

  const themeGoods = useMemo(
    () => filter(goods, (good) => good.special.has(name.toLowerCase())),
    [goods, name]
  );

  const enableButton = (position) => {
    if (window.matchMedia("(max-width: 850px)").matches) {
      return Object.getOwnPropertyNames(themeGoods).length - 2 > position;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return Object.getOwnPropertyNames(themeGoods).length - 3 > position;
    }
    return Object.getOwnPropertyNames(themeGoods).length - 4 > position;
  };

  const getShift = (position) => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return position * 155;
    } else if (window.matchMedia("(max-width: 850px)").matches) {
      return position === 0 ? -10 : -10 + position * 262;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return position * 262;
    }
    return position !== 0 &&
      position === Object.getOwnPropertyNames(themeGoods).length - 4
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
    <div className="theme-goods">
      <div className="theme-goods_name">
        <h3>{name}</h3>
      </div>
      <ul
        className="theme-goods_list list"
        ref={ref}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      >
        {map(themeGoods, (data) => (
          <li key={data.id}>
            <GoodCard data={data} addGoods={addGoods} />
          </li>
        ))}
      </ul>
      {!isTouchDevice() && slider.position > 0 && (
        <div className="mover mover_left">
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
            className="btn_mover"
          >
            <img
              src={process.env.PUBLIC_URL + "/resources/images/mover-left.png"}
              alt="move to the left"
            />
          </button>
        </div>
      )}
      {!isTouchDevice() && enableButton(slider.position) && (
        <div className="mover mover_right">
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
            className="btn_mover"
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
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.number,
      ])
    )
  ),
  name: PropTypes.string,
  addGoods: PropTypes.func,
};
