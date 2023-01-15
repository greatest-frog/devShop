import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/Shop";
import "./App.css";

function App({ goods }) {
  const [cart, setCart] = useState({});
  return (
    <div className="App">
      <NavBar goodsNumber={Object.keys(cart).length} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage goods={goods} />} />
          <Route path="/shop" element={<Shop goods={goods} />} />
        </Routes>
      </main>
    </div>
  );
}

App.propTypes = {
  goods: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType(PropTypes.string, PropTypes.number, PropTypes.object)
    )
  ),
};

export default App;
