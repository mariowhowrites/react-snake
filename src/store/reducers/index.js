import { combineReducers } from "redux";

import snakeReducer from "./snake";
import gameReducer from "./game";
import fruitReducer from "./fruit";

export default combineReducers({
  snake: snakeReducer,
  game: gameReducer,
  fruit: fruitReducer
});
