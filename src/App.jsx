import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";

function App() {
  const [goods, setGoods] = useState({});
  return (
    <div className="App">
      <NavBar goodsNumber={Object.keys(goods).length} />
    </div>
  );
}

export default App;
