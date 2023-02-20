import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_text">Project by greatest-frog</div>
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
          className="github__logo"
        />
      </a>
    </footer>
  );
};

export default Footer;
