import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import styles from "./About.module.css";

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About – devShop</title>
      </Helmet>
      <div className={styles.about}>
        <h2 className={styles.about__heading}>About devShop</h2>
        <p className={styles.about_paragraph}>
          devShop is a react project. Redux, accessability, responsive design,
          dark mode, pagination coming soon.
        </p>
      </div>
    </HelmetProvider>
  );
};

export default React.memo(About);
