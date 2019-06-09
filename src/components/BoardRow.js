import React from "react";

import BoardSquare from "./BoardSquare";

function BoardRow({ rowIndex, size, headPosition }) {
  const row = buildRowOptions(rowIndex, size, headPosition);

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {row.map(options => (
        <BoardSquare {...options} />
      ))}
    </div>
  );
}

export default BoardRow;

function buildRowOptions(rowIndex, size, headPosition) {
  let i = 1;
  const row = [];

  for (i; i <= size; i++) {
    const options = {
      rowIndex,
      columnIndex: i,
      key: i
    };

    options.squareColor = setBoardColors(rowIndex, size, i);

    if (
      options.rowIndex === headPosition.depth &&
      options.columnIndex === headPosition.width
    ) {
      options.squareColor = "green";
    }

    row.push(options);
  }

  return row;
}

function setBoardColors(rowIndex, size, i) {
  let squareColor;

  if (rowIndex === 1 || rowIndex === size) {
    squareColor = "black";
  } else {
    squareColor = i === 1 || i === size ? "black" : "white";
  }

  return squareColor;
}
