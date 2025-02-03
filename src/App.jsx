import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./components/First";
import Button from "./components/Button";
import Second from "./components/Second";
import Reigion from "./components/Reigion";
import Last from "./components/Last";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cont">
      <First />
      <Button />
      <Second />
      <Reigion />
      <Last />
    </div>
  );
}

export default App;
