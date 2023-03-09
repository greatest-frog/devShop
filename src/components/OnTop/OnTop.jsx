import React from "react";
import PropTypes from "prop-types";

import "./OnTop.css";

const OnTop = ({ className }) => {
  return (
    <button
      className={className ? `btn_on-top ${className}` : "btn_on-top"}
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

OnTop.defaultProps = {
  className: "",
};
