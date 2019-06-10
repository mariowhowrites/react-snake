import {
  SNAKE_INIT,
  CHANGE_POSITION,
  CHANGE_DIRECTION,
  SNAKE_QUEUE,
  SNAKE_GROW,
  SNAKE_CLEAR
} from "../types";

const defaultState = {
  direction: "UP",
  snakeQueue: [],
  snake: []
};

export default function snakeReducer(state = defaultState, action) {
  switch (action.type) {
    case SNAKE_INIT:
      const startingSnake = {
        depth: Math.ceil(action.payload / 2),
        width: Math.ceil(action.payload / 2)
      };

      return {
        ...state,
        snake: [startingSnake]
      };

    case SNAKE_CLEAR:
      console.log("should clear snake...");
      return defaultState;

    case CHANGE_POSITION:
      if (state.snakeQueue.length >= 1) {
        return state;
      }

      let newSnake = [...state.snake];
      newSnake.unshift(action.payload);
      newSnake.pop();

      return {
        ...state,
        snake: newSnake
      };

    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.payload
      };

    case SNAKE_QUEUE:
      let queue = [...state.snakeQueue];

      queue.push(action.payload);

      return {
        ...state,
        snakeQueue: queue
      };

    case SNAKE_GROW:
      const grownSnake = [...state.snake];
      let newQueue = [...state.snakeQueue];

      grownSnake.push(newQueue.pop());

      return {
        ...state,
        snake: grownSnake,
        snakeQueue: newQueue
      };

    default:
      return state;
  }
}
