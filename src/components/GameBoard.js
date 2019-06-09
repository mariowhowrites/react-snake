import React, { useEffect } from "react";
import { connect } from "react-redux";

import BoardRows from "./BoardRows";
import useSnakeMovement from "../useSnakeMovement";
import { addFruit } from "../store/actions";

function GameBoard({ startPosition, size, addFruit }) {
  const headPosition = useSnakeMovement(startPosition, size);

  useEffect(() => {
    addFruit(size, 2);
    console.log(addFruit);
  }, [addFruit, size]);

  return (
    <div
      style={{
        margin: "0 25vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <BoardRows headPosition={headPosition} />
    </div>
  );
}

const mapStateToProps = state => {
  return { startPosition: state.board.startPosition, size: state.board.size };
};

export default connect(
  mapStateToProps,
  { addFruit: (size, number) => addFruit(size, number) }
)(GameBoard);
