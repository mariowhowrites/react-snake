import React from "react";
import { connect } from "react-redux";

import BoardRow from "./BoardRow";

function BoardRows({ size }) {
  let rows = [];
  let i = 1;

  for (i; i <= size; i++) {
    rows.push({
      key: i,
      rowIndex: i,
      size
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
  size: state.game.size
});

export default connect(mapStateToProps)(BoardRows);
