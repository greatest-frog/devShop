import PropTypes from "prop-types";

import arrow from "./arrow-upward.png";
import "./OnTop.css";

const OnTop = ({ className }) => {
  return (
    <button
      className={className ? `btn_on-top ${className}` : "btn_on-top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={arrow} alt="On top" />
    </button>
  );
};

export default OnTop;

OnTop.propTypes = {
  className: PropTypes.string,
};

OnTop.defaultProps = {
  className: "",
};
