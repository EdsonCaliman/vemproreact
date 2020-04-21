import React, { useState } from "react";
import "./Buttons.css";

const Buttons = ({ repeat, setRepeat }) => {
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(0);

  const handleClickPlus = () => {
    setRepeat((repeat) => repeat + 1);
    setCountPlus((count) => count + 1);
  };
  const handleClickMinus = () => {
    setRepeat((repeat) => repeat - 1);
    setCountMinus((count) => count + 1);
  };

  return (
    <>
      <div className="App-logo-buttons">
        <button disabled={repeat === 6} onClick={handleClickPlus}>
          Incrementar
        </button>
        <button disabled={repeat === 1} onClick={handleClickMinus}>
          Decrementar
        </button>
      </div>
      <div>
        <p>
          <b>Logo +</b> button was clicked {countPlus} times
        </p>
        <p>
          <b>Logo -</b> button was clicked {countMinus} times
        </p>
      </div>
    </>
  );
};

export default Buttons;
