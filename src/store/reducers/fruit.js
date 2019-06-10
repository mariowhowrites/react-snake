import { ADD_FRUIT, COLLECT_FRUIT } from "../types";

const defaultState = {
  fruitPositions: []
};

export default function fruitReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      return {
        ...state,
        fruitPositions: [...action.payload, ...state.fruitPositions]
      };
    case COLLECT_FRUIT:
      console.log(action);
      return {
        ...state,
        fruitPositions: state.fruitPositions.filter(
          (_, index) => index !== action.payload
        )
      };
    default:
      return state;
  }
}
