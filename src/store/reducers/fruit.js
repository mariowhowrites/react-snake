import { ADD_FRUIT } from "../types";

const defaultState = {
  fruitPositions: []
};

export default function fruitReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      console.log("adding fruit");
      console.log(action.payload);
      return {
        ...state,
        fruitPositions: [...action.payload, ...state.fruitPositions]
      };
    default:
      return state;
  }
}
