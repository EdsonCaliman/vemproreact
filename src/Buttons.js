import React, { useState } from "react";
import { Button, Typography } from '@bayon/commons';
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
        <Button variant="primary" disabled={repeat >= 6} onClick={handleClickPlus}>
          Incrementar
        </Button>
        <Button disabled={repeat === 1} onClick={handleClickMinus}>
          Decrementar
        </Button>
      </div>
      <div>
        <Typography lineHeight={2} size={16}>
          <b>Logo +</b> button was clicked {countPlus} times
        </Typography>
        <Typography lineHeight={2} size={16}>
          <b>Logo -</b> button was clicked {countMinus} times
        </Typography>
      </div>
    </>
  );
};

export default Buttons;
