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

  let keysBound;

  const handleKeyboardEvents = e => {
    const keyboardActions = {
      ArrowUp: "UP",
      ArrowDown: "DOWN",
      ArrowLeft: "LEFT",
      ArrowRight: "RIGHT"
    };

    if (Object.keys(keyboardActions).includes(e.key)) {
      changeDirection(keyboardActions[e.key]);
    }
  };

  if (playing) {
    window.addEventListener("keyup", handleKeyboardEvents);
    keysBound = true;
  }

  if (!playing && keysBound) {
    window.removeEventListener("keyup", handleKeyboardEvents);
  }

  return (
    <div
      style={{
        margin: "0 25vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <BoardRows />
      {!playing && (
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "0.4rem 1rem",
            alignSelf: "flex-start",
            marginTop: "2rem"
          }}
          onClick={startGame}
        >
          Start Game
        </button>
      )}
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
