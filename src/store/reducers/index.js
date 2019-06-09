import { combineReducers } from "redux";

import directionReducer from "./direction";
import snakeReducer from "./snake";
import boardReducer from "./board"

export default combineReducers({
  direction: directionReducer,
  snake: snakeReducer,
  board: boardReducer
});
