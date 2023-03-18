import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./CharacteristicsCategory.module.css";

const CharacteristicsCategory = ({ category }) => {
  const chars = (() => {
    const temp = [];
    for (let entry of Object.entries(category.chars)) {
      temp.push(entry[1]);
    }
    return temp;
  })();
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
