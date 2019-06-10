import { GAME_START, GAME_END, ADD_SCORE } from "../types";

const defaultSize = 13;

const defaultState = {
  size: defaultSize,
  score: 0,
  highScores: [],
  playing: false
};

export default function gameReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: ++state.score
      };

    case GAME_START:
      return {
        ...state,
        playing: true
      };

    case GAME_END:
      const newHighScores = [...state.highScores];

      newHighScores.push(state.score);

      return {
        ...state,
        playing: false,
        score: 0,
        highScores: newHighScores.sort((a, b) => b - a)
      };

    default:
      return state;
  }
}
