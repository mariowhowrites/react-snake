import React, { useEffect } from "react";
import { connect } from "react-redux";

import BoardRows from "./BoardRows";
import useSnakeMovement from "../useSnakeMovement";
import { addFruit, changePosition, changeDirection } from "../store/actions";

function GameBoard({
  snake,
  size,
  score,
  addFruit,
  changeDirection,
  changePosition,
  direction
}) {

  useSnakeMovement(snake, size, changePosition, changeDirection, direction);

  useEffect(() => {
    addFruit(size, 2);
  }, [addFruit, size]);

  return (
    <div
      style={{
        margin: "0 25vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <BoardRows />
      <p>SCORE: {score}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    snake: state.snake.snake,
    size: state.game.size,
    score: state.game.score,
    direction: state.snake.direction
  };
};

export default connect(
  mapStateToProps,
  {
    addFruit: (size, number) => addFruit(size, number),
    changePosition: position => changePosition(position),
    changeDirection: direction => changeDirection(direction)
  }
)(GameBoard);
