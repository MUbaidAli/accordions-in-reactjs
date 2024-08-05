import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordians from "../Components/Accordians";

function App() {
  const [curOpen, setCurOpen] = useState(null);
  // const [count, setCount] = useState(0);

  return (
    <>
      <Accordians curOpen={curOpen} setCurOpen={setCurOpen} />
    </>
  );
}

export default App;
