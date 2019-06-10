import { FRUIT_ADD, FRUIT_COLLECT, FRUIT_CLEAR } from "../types";

const defaultState = {
  fruitPositions: []
};

export default function fruitReducer(state = defaultState, action) {
  switch (action.type) {
    case FRUIT_ADD:
      return {
        ...state,
        fruitPositions: [...action.payload, ...state.fruitPositions]
      };

    case FRUIT_COLLECT:
      const newFruit = [...state.fruitPositions].filter(
        (_, index) => index !== action.payload
      );

      return {
        ...state,
        fruitPositions: newFruit
      };

    case FRUIT_CLEAR:
      return defaultState;

    default:
      return state;
  }
}
