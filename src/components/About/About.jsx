import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./About.css";

const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About – devShop</title>
      </Helmet>
      <div className="about">
        <h2>About devShop</h2>
        <p>
          devShop is a react project. Redux, accessability, responsive design,
          dark mode, pagination coming soon.
        </p>
      </div>
    </HelmetProvider>
  );
};

export default React.memo(About);
