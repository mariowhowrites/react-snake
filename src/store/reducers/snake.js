import { CHANGE_POSITION } from "../types";

const defaultState = {
  headPosition: {
    width: 6,
    depth: 6
  }
};

export default function snakeReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_POSITION:
      return {
        headPosition: action.payload,
        ...state
      };
    default:
      return state;
  }
}
