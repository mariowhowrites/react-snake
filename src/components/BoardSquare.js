import React from "react";
import { connect } from "react-redux";

function BoardSquare({
  isBorder,
  columnIndex,
  rowIndex,
  headPosition,
  fruitPositions
}) {
  const styles = {
    width: "60px",
    height: "60px",
    backgroundColor: setSquareColor(
      isBorder,
      rowIndex,
      columnIndex,
      headPosition,
      fruitPositions
    )
  };

  if (
    styles.backgroundColor === "white" ||
    styles.backgroundColor === "green"
  ) {
    styles.border = "1px solid grey";
    styles.boxSizing = "border-box";
  }

  return <div style={styles} id={`${columnIndex}x${rowIndex}`} />;
}

const mapStateToProps = state => {
  return {
    headPosition: state.snake.headPosition,
    fruitPositions: state.fruit.fruitPositions
  };
};

export default connect(mapStateToProps)(BoardSquare);

function setSquareColor(
  isBorder,
  rowIndex,
  columnIndex,
  headPosition,
  fruitPositions
) {
  if (rowIndex === headPosition.depth && columnIndex === headPosition.width) {
    return "green";
  }

  for (let i = 0; i < fruitPositions.length; i++) {
    let fruit = fruitPositions[i];

    if (rowIndex === fruit.depth && columnIndex === fruit.width) {
      return "blue";
    }
  }

  if (isBorder) {
    return "black";
  }

  return "white";
}
