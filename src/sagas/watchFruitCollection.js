import { takeEvery, put, select } from "redux-saga/effects";

import * as types from "../store/types";

export default function* watchFruitCollection() {
  yield takeEvery(types.COLLECT_FRUIT, handleFruitCollection);
}

function* handleFruitCollection({ payload }) {
  const size = yield select(state => state.game.size);
  yield put({ type: types.ADD_FRUIT, payload: [makeFruit(size)] });
  yield put({ type: types.ADD_SCORE });
}

function makeFruit(size) {
  return {
    width: Math.floor(Math.random() * (size - 2)) + 2,
    depth: Math.floor(Math.random() * (size - 2)) + 2
  };
}
