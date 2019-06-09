import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from "../types";

const defaultState = {
  direction: MOVE_UP.substr(5)
};

export default function directionReducer(state = defaultState, action) {
  if ([MOVE_UP, MOVE_DOWN, MOVE_RIGHT, MOVE_LEFT].includes(action.type)) {
    return {
      direction: action.type.substr(5)
    };
  }

  return state
}
