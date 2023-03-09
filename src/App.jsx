import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Suspense,
} from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import OnTop from "./components/OnTop/OnTop";
import Loader from "./components/Loader/Loader";
import lazyTimerImport from "./lazyTimerImport";
import "./App.css";

// lazy importing elements
const HomePage = lazyTimerImport(
  import("./components/HomePage/HomePage.jsx"),
  300
);
const Shop = lazyTimerImport(import("./components/Shop/Shop.jsx"), 300);
const Product = lazyTimerImport(
  import("./components/Product/Product.jsx"),
  300
);
const Reviews = lazyTimerImport(
  import("./components/Reviews/Reviews.jsx"),
  300
);
const Cart = lazyTimerImport(import("./components/Cart/Cart.jsx"), 300);
const About = lazyTimerImport(import("./components/About/About.jsx"), 300);

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

  const cartRef = useRef();

  cartRef.current = cart;

  const addGoods = useCallback((id) => {
    if (!cartRef?.current?.hasOwnProperty(id)) {
      const newCart = Object.assign(
        { [id]: { id, amount: 1, active: true } },
        cartRef.current
      );
      setCart(newCart);
    }
  }, []);

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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
        <div className="button-space"></div>
        {<OnTop className={appear ? "visible" : "invisible"} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

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
