import PropTypes from "prop-types";

import ThemeGoods from "../ThemeGoods/ThemeGoods";
import "./HomePage.css";

const HomePage = ({ goods }) => {
  return (
    <div className="home">
      <div className="homepage-intro">
        <h2>Welcome to devShop</h2>
        <div className="homepage-intro_description">
          Here you can buy computer parts and accessories. We have a wide range
          and low prices.
        </div>
      </div>
      <ThemeGoods goods={goods} name="New" />
      <ThemeGoods goods={goods} name="Sale" />
    </div>
  );
};

HomePage.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
    )
  ),
};

export default HomePage;
