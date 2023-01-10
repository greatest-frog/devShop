import { useState } from "react";
import GoodCard from "../GoodCard/GoodCard";
import "./NewGoods.css";

const filter = (obj, rule) => {
  const filtered = {};
  for (let [id, data] of Object.entries(obj)) {
    if (rule(data)) {
      filtered[id] = data;
    }
  }
  return filtered;
};

const map = (obj, rule) => {
  const mapped = [];
  for (let [id, data] of Object.entries(obj)) {
    mapped.push(rule(data, id));
  }
  return mapped;
};

const NewGoods = ({ goods }) => {
  const [position, setPosition] = useState(0);
  return (
    <div className="new-goods">
      <h3>New</h3>
      <ul className="new-goods_list list">
        {map(
          filter(goods, (good) => good.special.has("new")),
          (data, key) => (
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
          )
        )}
      </ul>
      {position > 0 && (
        <div className="mover mover_left">
          <button
            onClick={() => {
              setPosition(position - 1);
            }}
            className="btn_mover"
          >
            <img src="./shop/resources/images/mover-left.png" alt="" />
          </button>
        </div>
      )}
      {Object.getOwnPropertyNames(goods).length - 4 > position && (
        <div className="mover mover_right">
          <button
            onClick={() => {
              setPosition(position + 1);
            }}
            className="btn_mover"
          >
            <img src="./shop/resources/images/mover-right.png" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NewGoods;
