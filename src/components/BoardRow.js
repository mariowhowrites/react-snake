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
  let columnIndex = 1;
  const row = [];

  for (columnIndex; columnIndex <= size; columnIndex++) {
    const options = {
      headPosition,
      rowIndex,
      columnIndex,
      key: columnIndex
    };

    if (isBorder(rowIndex, columnIndex, size)) {
      options.isBorder = true;
    }

    row.push(options);
  }

  return row;
}

function isBorder(rowIndex, columnIndex, size) {
  return (
    rowIndex === 1 ||
    rowIndex === size ||
    columnIndex === 1 ||
    columnIndex === size
  );
}
