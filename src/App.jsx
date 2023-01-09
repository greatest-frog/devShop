import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

function App({ goods }) {
  const [cart, setCart] = useState({});
  return (
    <div className="App">
      <NavBar goodsNumber={Object.keys(cart).length} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage goods={goods} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
