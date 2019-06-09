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
})