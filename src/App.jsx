import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import CalculatorUseReducer from "./components/CalculatorUseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Calculator />
      <CalculatorUseReducer />
    </div>
  );
}

export default App;
