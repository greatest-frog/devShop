import "./Filter.css";

import PropTypes from "prop-types";

const Filter = ({ className, filters, setFilters }) => {
  const handleArrayInput = async (e, name) => {
    const filtersCopy = await JSON.parse(JSON.stringify(filters));
    if (filtersCopy.hasOwnProperty(name)) {
      if (filtersCopy[name].includes(e.target.value)) {
        filtersCopy[name] = filtersCopy[name].filter(
          (el) => el !== e.target.value
        );
      } else {
        filtersCopy[name] = filtersCopy[name].concat([e.target.value]);
      }
    } else {
      filtersCopy[name] = [e.target.value];
    }

    setFilters(filtersCopy);
  };

  return (
    <div className={`filter ${className}`}>
      <div className="price-filter">
        Price
        <div className="price">
          <input
            type="number"
            name="minPrice"
            value={filters.priceRange?.[0] ? filters.priceRange[0] : ""}
            onChange={(e) => {
              const filtersCopy = JSON.parse(JSON.stringify(filters));
              if (filters.hasOwnProperty("priceRange")) {
                filtersCopy.priceRange = [
                  e.target.value,
                  filtersCopy.priceRange[1],
                ];
              } else {
                filtersCopy.priceRange = [e.target.value, "Inf"];
              }
              setFilters(filtersCopy);
            }}
          />
          &ndash;
          <input
            type="number"
            name="maxPrice"
            value={
              filters.priceRange?.[1]
                ? filters.priceRange[1] === "Inf"
                  ? ""
                  : filters.priceRange[1]
                : ""
            }
            onChange={(e) => {
              const filtersCopy = JSON.parse(JSON.stringify(filters));
              if (filters.hasOwnProperty("priceRange")) {
                filtersCopy.priceRange = [
                  filtersCopy.priceRange[0],
                  e.target.value,
                ];
              } else {
                filtersCopy.priceRange = [0, e.target.value];
              }
              setFilters(filtersCopy);
            }}
          />
        </div>
      </div>
      <div className="type-filter">
        Type
        <div className="types prop-list">
          <div className="type prop">
            <input
              type="checkbox"
              name="type"
              id="componentBox"
              value="Component"
              onChange={(e) => handleArrayInput(e, "type")}
            />
            <label htmlFor="componentBox">Component</label>
          </div>
          <div className="type prop">
            <input
              type="checkbox"
              name="type"
              id="accessoryBox"
              value="Accessory"
              onChange={(e) => handleArrayInput(e, "type")}
            />
            <label htmlFor="accessoryBox">Accessory</label>
          </div>
        </div>
      </div>
      {filters.hasOwnProperty("type") &&
        filters["type"].includes("Component") && (
          <div className="component-filter">
            Component
            <div className="component-types prop-list">
              <div className="component-type prop">
                <input
                  type="checkbox"
                  name="componentType"
                  id="processors"
                  value="Processor"
                  onChange={(e) => handleArrayInput(e, "element")}
                />
                <label htmlFor="processors">Processor</label>
              </div>
              <div className="component-type prop">
                <input
                  type="checkbox"
                  name="componentType"
                  id="graphicsCard"
                  value="Graphics card"
                  onChange={(e) => handleArrayInput(e, "element")}
                />
                <label htmlFor="graphicsCard">Graphics card</label>
              </div>
              <div className="component-type prop">
                <input
                  type="checkbox"
                  name="componentType"
                  id="powerSupply"
                  value="Power supply"
                  onChange={(e) => handleArrayInput(e, "element")}
                />
                <label htmlFor="powerSupply">Power supply</label>
              </div>
            </div>
          </div>
        )}
      {filters.hasOwnProperty("type") &&
        filters["type"].includes("Accessory") && (
          <div className="accessory-filter">
            Accessory
            <div className="accessory-types prop-list">
              <div className="accessory-type prop">
                <input
                  type="checkbox"
                  name="accessoryType"
                  id="mouse"
                  value="Mouse"
                  onChange={(e) => handleArrayInput(e, "element")}
                />
                <label htmlFor="mouse">Mouse</label>
              </div>
              <div className="accessory-type prop">
                <input
                  type="checkbox"
                  name="accessoryType"
                  id="keyboard"
                  value="Keyboard"
                  onChange={(e) => handleArrayInput(e, "element")}
                />
                <label htmlFor="keyboard">Keyboard</label>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      ),
    ])
  ),
  setFilters: PropTypes.func,
};
