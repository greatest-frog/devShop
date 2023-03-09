import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import image404 from "./404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Not Found – devShop</title>
      </Helmet>
      <div className="not-found">
        <img src={image404} alt="Error 404" className="not-found_image" />
        <h2>Page Not Found</h2>
        <Link to="/">Back to home</Link>
      </div>
    </HelmetProvider>
  );
};

export default NotFound;
