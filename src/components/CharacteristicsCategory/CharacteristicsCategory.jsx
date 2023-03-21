import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./CharacteristicsCategory.module.css";

const CharacteristicsCategory = ({ category }) => {
  const chars = Array.from(
    Object.entries(category.chars).map((entry) => entry[1])
  );
  return (
    <div className={styles.category}>
      <h3 className={styles.category__heading}>{category.title}</h3>
      <div className={classNames(styles.category__list, "list")}>
        {chars.map((char) => (
          <li key={char.name}>
            <div className={styles.char}>{`${char.name}: ${char.value}`}</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CharacteristicsCategory;

CharacteristicsCategory.propTypes = {
  category: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
};
