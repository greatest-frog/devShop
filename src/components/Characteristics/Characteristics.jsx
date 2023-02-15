import PropTypes from "prop-types";

import CharacteristicsCategory from "../CharacteristicsCategory/CharacteristicsCategory";
import { map } from "../../objectFunctions";
import "./Characteristics.css";

const Characteristics = ({ product }) => {
  return product ? (
    <div className="characteristics">
      {map(product.characteristics, (category) => (
        <CharacteristicsCategory category={category} key={category.title} />
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
