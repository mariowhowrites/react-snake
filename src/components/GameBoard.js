import React from "react";
import { connect } from "react-redux";

import BoardRows from "./BoardRows";
import useSnakeMovement from "../useSnakeMovement";
import { changePosition, changeDirection, startGame } from "../store/actions";

function GameBoard({
  snake,
  size,
  score,
  playing,
  changeDirection,
  changePosition,
  direction,
  highScores,
  startGame
}) {
  useSnakeMovement(
    snake,
    size,
    playing,
    changePosition,
    changeDirection,
    direction
  );

  return (
    <div
      style={{
        margin: "0 25vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <BoardRows />
      {!playing && <button onClick={startGame}>Start Game</button>}
      <p>SCORE: {score}</p>
      <p>High Scores:</p>
      <ol>
        {highScores.map((score, index) => {
          return <li key={index}>{score}</li>;
        })}
      </ol>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    snake: state.snake.snake,
    size: state.game.size,
    score: state.game.score,
    highScores: state.game.highScores,
    playing: state.game.playing,
    direction: state.snake.direction
  };
};

export default connect(
  mapStateToProps,
  {
    changePosition: position => changePosition(position),
    changeDirection: direction => changeDirection(direction),
    startGame
  }
)(GameBoard);
