import React from "react";
import useSnakeMovement from "./useSnakeMovement";

function App() {
  const headPosition = useSnakeMovement({
    width: 6,
    depth: 6
  });

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

export default App;

function BoardRows({ headPosition }) {
  const rowsCount = 11;
  let rows = [];
  let i = 1;

  for (i; i <= rowsCount; i++) {
    rows.push({
      key: i,
      rowIndex: i,
      rowsCount,
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

function BoardRow({ rowIndex, rowsCount, headPosition }) {
  const row = [];
  const columnsCount = 11;
  let i = 1;

  for (i; i <= columnsCount; i++) {
    const options = {
      rowIndex,
      columnIndex: i,
      key: i
    };

    if (rowIndex === 1 || rowIndex === rowsCount) {
      options.squareColor = "black";
    } else {
      options.squareColor = i === 1 || i === columnsCount ? "black" : "white";
    }

    if (
      options.rowIndex === headPosition.depth &&
      options.columnIndex === headPosition.width
    ) {
      options.squareColor = "green";
    }

    row.push(options);
  }

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

function BoardSquare({ squareColor, columnIndex, rowIndex }) {
  const styles = {
    width: "60px",
    height: "60px",
    backgroundColor: squareColor
  };

  if (squareColor === "white" || squareColor === "green") {
    styles.border = "1px solid grey";
    styles.boxSizing = "border-box";
  }

  return <div style={styles} id={`${columnIndex}x${rowIndex}`} />;
}
