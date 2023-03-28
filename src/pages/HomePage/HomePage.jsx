import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

import ThemeGoods from "../../modules/ThemeGoods/ThemeGoods";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>devShop – Home</title>
      </Helmet>
      <div className={styles.homepage}>
        <div className={styles.homepage__intro}>
          <h2 className={styles.homepage__heading}>Welcome to devShop</h2>
          <div className={styles.homepage__intro_description}>
            Here you can buy computer parts and accessories. We have a wide
            range and low prices.
          </div>
        </div>
        <ThemeGoods name="New" />
        <ThemeGoods name="Sale" />
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
