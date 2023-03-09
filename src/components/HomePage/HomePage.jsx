import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

import ThemeGoods from "../ThemeGoods/ThemeGoods";
import "./HomePage.css";

const HomePage = ({ addGoods, goods }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>devShop – Home</title>
      </Helmet>
      <div className="home">
        <div className="homepage-intro">
          <h2>Welcome to devShop</h2>
          <div className="homepage-intro_description">
            Here you can buy computer parts and accessories. We have a wide
            range and low prices.
          </div>
        </div>
        <ThemeGoods name="New" goods={goods} addGoods={addGoods} />
        <ThemeGoods name="Sale" goods={goods} addGoods={addGoods} />
      </div>
    </HelmetProvider>
  );
};

export default React.memo(HomePage);

HomePage.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  addGoods: PropTypes.func,
};
