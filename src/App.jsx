import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import Reviews from "./components/Reviews/Reviews";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import OnTop from "./components/OnTop/OnTop";
import "./App.css";

function App({ goods }) {
  useEffect(() => {
    if (
      window.localStorage?.getItem("colorMode") === "dark" ||
      (window.localStorage?.getItem("colorMode") !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("body")?.classList?.add("dark");
    }
  }, []);

  const [cart, setCart] = useState({});
  const [appear, setAppear] = useState(false);
  const [mode, setMode] = useState(
    window.localStorage?.getItem("colorMode")
      ? window.localStorage.getItem("colorMode")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const addGoods = async (id) => {
    if (!cart.hasOwnProperty(id)) {
      const newCart = await JSON.parse(JSON.stringify(cart));
      newCart[id] = { id, amount: 1, active: true };
      setCart(newCart);
    }
  };

  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };

  return (
    <div className="App">
      <NavBar
        goodsNumber={Object.keys(cart).length}
        setMode={setMode}
        mode={mode}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage goods={goods} addGoods={addGoods} />}
          />
          <Route
            path="/shop"
            element={<Shop goods={goods} addGoods={addGoods} />}
          />
          <Route
            path="/shop/:productId"
            element={<Product goods={goods} addGoods={addGoods} />}
          />
          <Route
            path="/shop/:productId/reviews"
            element={<Reviews goods={goods} />}
          />
          <Route
            path="/cart"
            element={<Cart goods={goods} cart={cart} setCart={setCart} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="button-space"></div>
        {<OnTop className={appear ? "visible" : "invisible"} />}
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
};

export default App;
