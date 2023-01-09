import NewGoods from "../NewGoods/NewGoods";
import "./HomePage.css";

const HomePage = ({ goods }) => {
  return (
    <div className="home">
      <div className="homepage-intro">
        <h2>Welcome to devShop</h2>
        <div className="homepage-intro_description">
          Here you can buy computer parts and accessories. We have a wide range
          and low prices.
        </div>
      </div>
      <NewGoods goods={goods} />
    </div>
  );
};

export default HomePage;
