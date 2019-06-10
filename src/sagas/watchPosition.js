import * as types from "../store/types";
import { takeEvery, put, select } from "redux-saga/effects";

export default function* watchPosition() {
  yield takeEvery(types.CHANGE_POSITION, handlePositionChange);
}

const getState = state => ({
  fruitPositions: state.fruit.fruitPositions,
  snakeQueue: state.snake.snakeQueue,
  snake: state.snake.snake
});

function* handlePositionChange({ payload }) {
  const { fruitPositions, snakeQueue, snake } = yield select(getState);

  const gameIsOver = snake.some((segment, index) => {
    return (
      index !== 0 &&
      segment.width === payload.width &&
      segment.depth === payload.depth
    );
  });

  if (gameIsOver) {
    yield put({ types: types.GAME_END });
    return;
  }

  const fruitToRemove = fruitPositions.findIndex(fruit => {
    return fruit.width === payload.width && fruit.depth === payload.depth;
  });

  if (fruitToRemove >= 0) {
    yield put({ type: types.FRUIT_COLLECT, payload: fruitToRemove });
    yield put({ type: types.SNAKE_QUEUE, payload });
  }

  if (snakeQueue.length >= 1) {
    yield put({ type: types.SNAKE_GROW });
  }
}
