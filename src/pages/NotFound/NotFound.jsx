import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import image404 from "./404.png";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Not Found – devShop</title>
      </Helmet>
      <div className={styles.notFound}>
        <img
          src={image404}
          alt="Error 404"
          className={styles.notFound__image}
        />
        <h2 className={styles.notFound__heading}>Page Not Found</h2>
        <Link to="/" className={styles.notFound__link}>
          Back to home
        </Link>
      </div>
    </HelmetProvider>
  );
};

export default NotFound;
