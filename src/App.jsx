import { useState } from "react";
import Header from "./components/Header";

import "./styles.css";
import Todo from "./components/Todo";

function App() {
  const [light, setLight] = useState(true);
  const handleTheme = () => {
    setLight(!light);
  };
  return (
    <div className={`container ${light ? "containerLight" : "containerDark"}`}>
      <Header onClick={handleTheme} theme={light} />
      <Todo theme={light} />
    </div>
  );
}

export default App;
