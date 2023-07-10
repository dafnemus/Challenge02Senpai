import { useState } from "react";
import Header from "./components/Header";
import "./styles.css";

function App() {
  const [light, setLight] = useState(true);
  const handleTheme = () => {
    setLight(!light);
  };
  return (
    <div className={`container ${light ? "containerLight" : "containerDark"}`}>
      <Header onClick={handleTheme} theme={light} />
    </div>
  );
}

export default App;
