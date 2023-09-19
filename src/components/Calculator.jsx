import React from "react";
import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const number1Change = (e) => {
    setNumber1(Number(e.target.value));
  };
  const number2Change = (e) => {
    setNumber2(Number(e.target.value));
  };
  const handleAddition = () => {
    setResult(number1 + number2);
  };
  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={number1Change}
            value={number1}
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={number2Change}
            value={number2}
          ></input>
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="Result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="Result"
            value={result}
            readOnly
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
