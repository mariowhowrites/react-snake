import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import GameBoard from "./components/GameBoard";

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
}

export default App;
