import { useState } from "react";
import { filter, map } from "../../objectFunctions";
import GoodCard from "../GoodCard/GoodCard";
import "./ThemeGoods.css";

const ThemeGoods = ({ goods, name }) => {
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
            <GoodCard data={data} />
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
              src="https://greatest-frog.github.io/shop/resources/images/mover-left.png"
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
              src="https://greatest-frog.github.io/shop/resources/images/mover-right.png"
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeGoods;
