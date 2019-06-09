import { combineReducers } from "redux";

import directionReducer from "./direction";
import snakeReducer from "./snake";
import boardReducer from "./board";
import fruitReducer from "./fruit";

export default combineReducers({
  direction: directionReducer,
  snake: snakeReducer,
  board: boardReducer,
  fruit: fruitReducer
});
