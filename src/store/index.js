import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers"

export default function configureStore(sagas) {
  return createStore(reducers, applyMiddleware(sagas))
}