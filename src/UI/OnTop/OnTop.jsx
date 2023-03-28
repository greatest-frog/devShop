import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./OnTop.module.css";

const OnTop = ({ className }) => {
  return (
    <button
      className={
        className
          ? classNames(styles.button_onTop, className)
          : styles.button_onTop
      }
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img
        src={process.env.PUBLIC_URL + "/resources/images/arrow-upward.png"}
        alt="On top"
      />
    </button>
  );
};

export default React.memo(OnTop);

OnTop.propTypes = {
  className: PropTypes.string,
};
