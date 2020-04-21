import React, { useState } from "react";
import { Button} from '@bayon/commons';
import "./App.css";
import Logo from "./Logo";
import Text from "./Text";
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
        <Button variant="subtle" href="https://reactjs.org" target="_blank">
           Learn React
        </Button>
      </Header>
    </div>
  );
};

export default App;
