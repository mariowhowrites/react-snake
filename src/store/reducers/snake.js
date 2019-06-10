import {
  CHANGE_POSITION,
  CHANGE_DIRECTION,
  QUEUE_SNAKE,
  GROW_SNAKE
} from "../types";

const defaultState = {
  direction: "UP",
  snakeQueue: [],
  snake: [
    {
      width: 6,
      depth: 6
    }
  ]
};

export default function snakeReducer(state = defaultState, action) {
  switch (action.type) {
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
    case QUEUE_SNAKE:
      let queue = [...state.snakeQueue];

      queue.push(action.payload);

      return {
        ...state,
        snakeQueue: queue
      };
    case GROW_SNAKE:
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
