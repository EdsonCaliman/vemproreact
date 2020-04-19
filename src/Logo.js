import React from "react";
import logo from "./logo.svg";
import "./Logo.css";

const Logo = (props) => {
  const imgs = [];

  for (let i = 0; i < props.repeat && i < 6; i++) {
    imgs.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
  }

  return <div className="App-logo-container">{imgs}</div>;
};

Logo.defaultProps = {
  repeat: 1,
};

export default Logo;
