import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga"

import configureStore from "./store";
import GameBoard from "./components/GameBoard";
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore(sagaMiddleware)
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
}

export default App;
