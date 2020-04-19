import React, { useState } from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = (props) => {
  const [repeat, setRepeat] = useState(1);
  const imgs = [];

  for (let i = 0; i < repeat; i++) {
    imgs.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }

  return (
    <>
      <div className="App-logo-container">{imgs}</div>
      <div>
        <button
          disabled={repeat === 6}
          onClick={() => setRepeat((repeat) => repeat + 1)}
        >
          Incrementar
        </button>
        {"  "}
        <button
          disabled={repeat === 1}
          onClick={() => setRepeat((repeat) => repeat - 1)}
        >
          Decrementar
        </button>
      </div>
    </>
  );
};

export default Logo;
