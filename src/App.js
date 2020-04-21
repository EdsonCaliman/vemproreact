import React, { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Text from "./Text";
import Link from "./Link";
import Header from "./Header";
import Buttons from "./Buttons";

const App = () => {
  const [repeat, setRepeat] = useState(1);

  return (
    <div className="App">
      <Header>
        <Logo repeat={repeat} setRepeat={setRepeat} />
        <Buttons repeat={repeat} setRepeat={setRepeat} />
        <Text />
        <Link />
      </Header>
    </div>
  );
};

export default App;
