import * as types from "./types";

/**
 * SNAKE ACTIONS
 */

export const changeDirection = direction => ({
  type: types.CHANGE_DIRECTION,
  payload: direction
});

export const changePosition = position => {
  return {
    type: types.CHANGE_POSITION,
    payload: position
  };
};

/**
 * GAME ACTIONS
 */

export const startGame = () => {
  return {
    type: types.GAME_START
  };
};

/**
 * FRUIT ACTIONS
 */

export const addFruit = (size, number = 1) => {
  const fruit = [];

  for (let i = 0; i < number; i++) {
    fruit.push(makeFruit(size));
  }

  return {
    type: types.FRUIT_ADD,
    payload: fruit
  };
};

function makeFruit(size) {
  return {
    width: Math.floor(Math.random() * (size - 2)) + 2,
    depth: Math.floor(Math.random() * (size - 2)) + 2
  };
}
