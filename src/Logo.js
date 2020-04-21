import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Toast } from '@bayon/commons';
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

  return (
    <>
      <div className="App-logo-container">
        {imgs}
      </div>
      <Toast
          open={repeat === 6}
          type="error"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          message="O valor máximo permitido é 6!"
      />
    </>);
};

export default Logo;
