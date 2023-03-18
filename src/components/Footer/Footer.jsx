import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer__text">Project by greatest-frog</div>
      <a
        href="https://github.com/greatest-frog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={
            process.env.PUBLIC_URL + "/resources/images/github-logo-white.svg"
          }
          alt="github"
          className={styles.footer__logo_github}
        />
      </a>
    </footer>
  );
};

export default React.memo(Footer);
