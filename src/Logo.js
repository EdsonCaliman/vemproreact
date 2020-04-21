import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = ({ repeat }) => {
  // executa na alteração do estado da variavel repeat
  useEffect(() => {
    console.log("repeat updated!");
  }, [repeat]);

  const imgs = [];

  for (let i = 0; i < repeat; i++) {
    imgs.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }

  return <div className="App-logo-container">{imgs}</div>;
};

export default Logo;
