import { useEffect } from "react";

import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "About – devShop";
    return () => {
      document.title = "devShop";
    };
  }, []);

  return (
    <div className="about">
      <h2>About devShop</h2>
      <p>
        devShop is a react project. Redux, accessability, responsive design,
        dark mode, pagination coming soon.
      </p>
    </div>
  );
};

export default About;
