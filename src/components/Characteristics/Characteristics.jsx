import PropTypes from "prop-types";

import CharacteristicsCategory from "../CharacteristicsCategory/CharacteristicsCategory";
import styles from "./Characteristics.module.css";

const Characteristics = ({ product }) => {
  const cats = Array.from(
    Object.entries(product.characteristics).map((entry) => entry[1])
  );
  return product ? (
    <div className={styles.characteristics}>
      {cats.map((cat) => (
        <CharacteristicsCategory category={cat} key={cat.title} />
      ))}
    </div>
  ) : (
    <div className={styles.characteristics}>
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
