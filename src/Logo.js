import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = (props) => {
  const [repeat, setRepeat] = useState();
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(0);
  const imgs = [];

  // executa apenas uma vez na criação do componente
  useEffect(() => {
    setRepeat(1);
  }, []);

  // executa na alteração do estado da variavel repeat
  useEffect(() => {
    console.log("repeat updated!");
  }, [repeat]);

  for (let i = 0; i < repeat; i++) {
    imgs.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }

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
      <div className="App-logo-container">{imgs}</div>
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

export default Logo;
