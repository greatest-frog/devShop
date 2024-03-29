import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import OnTop from "./UI/OnTop/OnTop";
import Loader from "./UI/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import lazyTimerImport from "./lazyTimerImport";
import "./App.css";

// lazy importing elements
const HomePage = lazyTimerImport(import("./pages/HomePage/HomePage.jsx"), 300);
const Shop = lazyTimerImport(import("./pages/Shop/Shop.jsx"), 300);
const Product = lazyTimerImport(import("./pages/Product/Product.jsx"), 300);
const Reviews = lazyTimerImport(import("./pages/Reviews/Reviews.jsx"), 300);
const Cart = lazyTimerImport(import("./pages/Cart/Cart.jsx"), 300);
const About = lazyTimerImport(import("./pages/About/About.jsx"), 300);

function App() {
  useEffect(() => {
    if (
      window.localStorage?.getItem("colorMode") === "dark" ||
      (window.localStorage?.getItem("colorMode") !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("body")?.classList?.add("dark");
    }
  }, []);

  const [appear, setAppear] = useState(false);
  const [mode, setMode] = useState(
    window.localStorage?.getItem("colorMode")
      ? window.localStorage.getItem("colorMode")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };

  return (
    <div className="App">
      <NavBar setMode={setMode} mode={mode} />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productId" element={<Product />} />
            <Route path="/shop/:productId/reviews" element={<Reviews />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
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
