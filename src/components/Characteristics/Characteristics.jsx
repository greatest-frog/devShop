import PropTypes from "prop-types";

import CharacteristicsCategory from "../CharacteristicsCategory/CharacteristicsCategory";
import "./Characteristics.css";

const Characteristics = ({ product }) => {
  const cats = (() => {
    const temp = [];
    for (let [key, value] of Object.entries(product.characteristics)) {
      temp.push(value);
    }
    return temp;
  })();
  return product ? (
    <div className="characteristics">
      {cats.map((cat) => (
        <CharacteristicsCategory category={cat} key={cat.title} />
      ))}
    </div>
  ) : (
    <div className="characteristics">
      <h2>Characteristics not yet available</h2>
    </div>
  );
};

export default Characteristics;

Characteristics.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string])
  ),
};
