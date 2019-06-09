import * as types from "./types";

/**
 * Direction actions
 */

export const moveUp = () => ({
  type: types.MOVE_UP
});

export const moveDown = () => ({
  type: types.MOVE_DOWN
});

export const moveLeft = () => ({
  type: types.MOVE_LEFT
});

export const moveRight = () => ({
  type: types.MOVE_UP
});

/**
 * POSITION ACTIONS
 */

export const changePosition = position => ({
  type: types.CHANGE_POSITION,
  payload: position
});

/**
 * FRUIT ACTIONS
 */

export const addFruit = (size, number = 1) => {
  const fruit = [];

  console.log(size, number);

  for (let i = 0; i < number; i++) {
    fruit.push(makeFruit(size));
  }

  return {
    type: types.ADD_FRUIT,
    payload: fruit
  };
};

function makeFruit(size) {
  return {
    width: Math.floor(Math.random() * (size - 2)) + 2,
    depth: Math.floor(Math.random() * (size - 2)) + 2
  };
}
