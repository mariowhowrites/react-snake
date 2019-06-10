import { all } from "redux-saga/effects";

import watchPosition from "./watchPosition"
import watchFruitCollection from "./watchFruitCollection"


export default function* rootSaga() {
  yield all([watchPosition(), watchFruitCollection()]);
}

// what side effects do we want?
// when move, remove fruit if necessary
// when remove fruit, add to score
