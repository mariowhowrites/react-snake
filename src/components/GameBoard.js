import React from "react";
import { connect } from "react-redux";

import BoardRows from "./BoardRows";
import useSnakeMovement from "../useSnakeMovement";

function GameBoard({ startPosition, size }) {
  const headPosition = useSnakeMovement(startPosition, size);

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

export default connect(mapStateToProps)(GameBoard);
