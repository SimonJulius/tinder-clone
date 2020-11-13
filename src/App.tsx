import React from "react";

import { AppStyle, GlobalStyle } from "./App.style";
import Header from "./components/header";
import Card from "./components/card";
import SwipePane from "./components/swipe-buttons-pane";

/*
Header
Tinder-Card
Swipe Buttons
*/

function App() {
  return (
    <AppStyle>
      <div className="app">
        <Header />
        <Card />
        <SwipePane />
        <GlobalStyle />
      </div>
    </AppStyle>
  );
}

export default App;
