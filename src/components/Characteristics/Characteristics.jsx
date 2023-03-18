import PropTypes from "prop-types";

import CharacteristicsCategory from "../CharacteristicsCategory/CharacteristicsCategory";
import styles from "./Characteristics.module.css";

const Characteristics = ({ product }) => {
  const cats = (() => {
    const temp = [];
    for (let entry of Object.entries(product.characteristics)) {
      temp.push(entry[1]);
    }
    return temp;
  })();
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
