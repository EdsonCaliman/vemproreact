import React from "react";
import "./App.css";
import Logo from "./Logo";
import Text from "./Text";
import Link from "./Link";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Text />
        <Link />
      </Header>
    </div>
  );
};

export default App;
