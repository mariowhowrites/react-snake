import React from "react";

import BoardSquare from "./BoardSquare";

function BoardRow({ rowIndex, size }) {
  const row = buildRowOptions(rowIndex, size);

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

function buildRowOptions(rowIndex, size) {
  let columnIndex = 1;
  const row = [];

  for (columnIndex; columnIndex <= size; columnIndex++) {
    const options = {
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
