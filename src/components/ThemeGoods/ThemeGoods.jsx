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
              left:
                position !== 0 &&
                position === Object.getOwnPropertyNames(goods).length - 4
                  ? (position - 1) * -262 - 130
                  : position * -262,
            }}
          >
            <GoodCard data={data} addGoods={addGoods} />
          </li>
        ))}
      </ul>
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
      {Object.getOwnPropertyNames(themeGoods).length - 4 > position && (
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
