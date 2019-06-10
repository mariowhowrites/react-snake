import { all } from "redux-saga/effects";

import watchPosition from "./watchPosition";
import watchFruitCollection from "./watchFruitCollection";
import { watchGameStart, watchGameEnd } from "./watchGameChange";

export default function* rootSaga() {
  yield all([
    watchPosition(),
    watchFruitCollection(),
    watchGameStart(),
    watchGameEnd()
  ]);
}

// what side effects do we want?
// when move, remove fruit if necessary
// when remove fruit, add to score
