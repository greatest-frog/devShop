import "./Loader.css";
import "./DarkLoader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_circle-wrapper">
        <div className="loader_circle"></div>
      </div>
      <div className="loader_title">Loading...</div>
    </div>
  );
};

export default Loader;
