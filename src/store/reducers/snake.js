import { CHANGE_POSITION, CHANGE_DIRECTION } from "../types";

const defaultState = {
  headPosition: {
    width: 6,
    depth: 6
  },
  direction: "UP"
};

export default function snakeReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_POSITION:
      return {
        ...state,
        headPosition: action.payload
      };
    case CHANGE_DIRECTION:
        return {
          ...state,
          direction: action.payload
        }
    default:
      return state;
  }
}
