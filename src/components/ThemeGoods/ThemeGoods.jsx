import { useState } from "react";
import PropTypes from "prop-types";
import { filter, map } from "../../objectFunctions";

import GoodCard from "../GoodCard/GoodCard";
import "./ThemeGoods.css";

const ThemeGoods = ({ goods, name, addGoods }) => {
  const [position, setPosition] = useState(0);
  const themeGoods = filter(goods, (good) =>
    good.special.has(name.toLowerCase())
  );

  const enableButton = () => {
    if (window.matchMedia("(max-width: 850px)").matches) {
      console.log(goods);
      return Object.getOwnPropertyNames(themeGoods).length - 2 > position;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return Object.getOwnPropertyNames(themeGoods).length - 3 > position;
    }
    return Object.getOwnPropertyNames(themeGoods).length - 4 > position;
  };

  const getShift = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      return position * -155;
    } else if (window.matchMedia("(max-width: 850px)").matches) {
      return position === 0 ? 10 : 10 + position * -262;
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return position * -262;
    }
    return position !== 0 &&
      position === Object.getOwnPropertyNames(themeGoods).length - 4
      ? (position - 1) * -262 - 130
      : position * -262;
  };

  return (
    <div className="theme-goods">
      <div className="theme-goods_name">
        <h3>{name}</h3>
      </div>
      <ul className="theme-goods_list list">
        {map(themeGoods, (data, key) => (
          <li
            key={key}
            style={{
              left: getShift(),
            }}
          >
            <GoodCard data={data} addGoods={addGoods} />
          </li>
        ))}
      </ul>
      {/* TODO touch movers */}
      {position > 0 && (
        <div className="mover mover_left">
          <button
            onClick={() => {
              setPosition(position - 1);
            }}
            className="btn_mover"
          >
            <img
              src="https://greatest-frog.github.io/devShop/resources/images/mover-left.png"
              alt=""
            />
          </button>
        </div>
      )}
      {enableButton() && (
        <div className="mover mover_right">
          <button
            onClick={() => {
              setPosition(position + 1);
            }}
            className="btn_mover"
          >
            <img
              src="https://greatest-frog.github.io/devShop/resources/images/mover-right.png"
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

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

export default ThemeGoods;
