import PropTypes from "prop-types";

import "./DarkCharacteristicsCategory.css";

const CharacteristicsCategory = ({ category }) => {
  const chars = (() => {
    const temp = [];
    for (let [key, value] of Object.entries(category.chars)) {
      temp.push(value);
    }
    return temp;
  })();
  return (
    <div className="chars-category">
      <h3>{category.title}</h3>
      <div className="category-list list">
        {chars.map((char) => (
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
