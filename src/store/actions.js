import * as types from "./types";

/**
 * Direction actions
 */

export const changeDirection = direction => ({
  type: types.CHANGE_DIRECTION,
  payload: direction
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
