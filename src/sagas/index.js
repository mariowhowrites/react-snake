import { takeEvery, put, all, select } from "redux-saga/effects";
import * as types from "../store/types";

function* watchPosition() {
  yield takeEvery(types.CHANGE_POSITION, handleFruit);
}

const getFruitPositions = state => state.fruit.fruitPositions;

function* handleFruit({ payload }) {
  const fruitPositions = yield select(getFruitPositions);

  // console.log(fruitPositions);

  const fruitToRemove = fruitPositions.findIndex(fruit => {
    return fruit.width === payload.width && fruit.depth === payload.depth;
  });

  console.log(fruitToRemove);

  if (fruitToRemove >= 0) {
    yield put({ type: types.COLLECT_FRUIT, payload: fruitToRemove });
  }
}

function* watchFruitCollection() {
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

export default function* rootSaga() {
  yield all([watchPosition(), watchFruitCollection()]);
}

// what side effects do we want?
// when move, remove fruit if necessary
// when remove fruit, add to score
