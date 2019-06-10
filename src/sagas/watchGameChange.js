import { takeEvery, put, select } from "redux-saga/effects";

import * as types from "../store/types";

export function* watchGameStart() {
  yield takeEvery(types.GAME_START, handleGameStart);
}

function* handleGameStart() {
  const size = yield select(state => state.game.size);

  yield put({
    type: types.FRUIT_ADD,
    payload: [makeFruit(size), makeFruit(size)]
  });

  yield put({ type: types.SNAKE_INIT, payload: size });
}

function makeFruit(size) {
  return {
    width: Math.floor(Math.random() * (size - 2)) + 2,
    depth: Math.floor(Math.random() * (size - 2)) + 2
  };
}

export function* watchGameEnd() {
  yield takeEvery(types.GAME_END, handleGameEnd);
}

function* handleGameEnd() {
  yield put({ type: types.SNAKE_CLEAR });
  yield put({ type: types.FRUIT_CLEAR });
}
