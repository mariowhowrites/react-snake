import * as types from "../store/types";
import { takeEvery, put, select } from "redux-saga/effects";

export default function* watchPosition() {
  yield takeEvery(types.CHANGE_POSITION, handlePositionChange);
}

const getFruitPositions = state => ({
  fruitPositions: state.fruit.fruitPositions,
  snakeQueue: state.snake.snakeQueue
});

function* handlePositionChange({ payload }) {
  const { fruitPositions, snakeQueue } = yield select(getFruitPositions);

  const fruitToRemove = fruitPositions.findIndex(fruit => {
    return fruit.width === payload.width && fruit.depth === payload.depth;
  });

  if (fruitToRemove >= 0) {
    yield put({ type: types.COLLECT_FRUIT, payload: fruitToRemove });
    yield put({ type: types.QUEUE_SNAKE, payload });
  }

  if (snakeQueue.length >= 1) {
    yield put({ type: types.GROW_SNAKE });
  }
}
