import { ADD_SCORE } from "../types";

const defaultSize = 13;

const defaultState = {
  size: defaultSize,
  score: 0
};

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: ++state.score
      };
    default:
      return state;
  }
}
