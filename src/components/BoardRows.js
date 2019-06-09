import React from "react";
import { connect } from "react-redux";

import BoardRow from "./BoardRow";

function BoardRows({ headPosition, size }) {
  let rows = [];
  let i = 1;

  for (i; i <= size; i++) {
    rows.push({
      key: i,
      rowIndex: i,
      size,
      headPosition
    });
  }

  return (
    <React.Fragment>
      {rows.map(options => (
        <BoardRow {...options} />
      ))}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  size: state.board.size
});

export default connect(mapStateToProps)(BoardRows);
