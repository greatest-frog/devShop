import PropTypes from "prop-types";

import "./Footer.css";

const Footer = ({ mode }) => {
  return (
    <footer>
      <div className="footer_text">Project by greatest-frog</div>
      <a
        href="https://github.com/greatest-frog"
        target="_blank"
        rel="noopener noreferrer"
      >
        {mode === "light" && (
          <img
            src="https://greatest-frog.github.io/devShop/resources/images/github-logo-white.svg"
            alt="github"
            className="github__logo"
          />
        )}
        {mode !== "light" && (
          <img
            src="https://greatest-frog.github.io/devShop/resources/images/github-logo.svg"
            alt="github"
            className="github__logo"
          />
        )}
      </a>
    </footer>
  );
};

export default Footer;

Footer.defaultProps = {
  mode: "light",
};

Footer.propTypes = {
  mode: PropTypes.string,
};
