import React from "react";

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

export default BoardSquare