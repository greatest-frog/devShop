import PropTypes from "prop-types";

import { map } from "../../objectFunctions";
import "./CharacteristicsCategory.css";

const CharacteristicsCategory = ({ category }) => {
  return (
    <div className="chars-category">
      <h3>{category.title}</h3>
      <div className="category-list list">
        {map(category.chars, (char) => (
          <li key={char.name}>
            <div className="char">{`${char.name}: ${char.value}`}</div>
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
