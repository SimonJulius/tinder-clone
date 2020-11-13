import React from "react";

import Style from "./App.style";
import Header from "./components/header";
import Card from "./components/card";
import SwipePane from "./components/swipe-buttons-pane";

const { AppStyle, GlobalStyle } = Style;
/*
Header
Tinder-Card
Swipe Buttons
*/

function App() {
  return (
    <div className="app">
      <Header />
      <Card />
      <SwipePane />
      <GlobalStyle />
    </div>
  );
}

export default App;
