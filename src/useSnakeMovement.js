import { useEffect } from "react";

function useSnakeMovement(
  snake,
  size,
  playing,
  changePosition,
  changeDirection,
  direction
) {
  const headPosition = snake[0];

  useEffect(() => {
    if (!playing) {
      return;
    }

    let moveUp = () => {
      let newDepth = headPosition.depth - 1;

      if (newDepth < 2) {
        newDepth = size - 1;
      }

      changePosition({
        width: headPosition.width,
        depth: newDepth
      });
    };

    let moveDown = () => {
      let newDepth = headPosition.depth + 1;

      if (newDepth > size - 1) {
        newDepth = 2;
      }

      changePosition({
        width: headPosition.width,
        depth: newDepth
      });
    };

    let moveLeft = () => {
      let newWidth = headPosition.width - 1;

      if (newWidth < 2) {
        newWidth = size - 1;
      }

      changePosition({
        depth: headPosition.depth,
        width: newWidth
      });
    };

    let moveRight = () => {
      let newWidth = headPosition.width + 1;

      if (newWidth > size - 1) {
        newWidth = 2;
      }

      changePosition({
        depth: headPosition.depth,
        width: newWidth
      });
    };

    const keyboardActions = {
      UP: moveUp,
      DOWN: moveDown,
      LEFT: moveLeft,
      RIGHT: moveRight
    };

    const id = setInterval(keyboardActions[direction], 100);

    return () => {
      clearInterval(id);
    };
  }, [playing, direction, changePosition, changeDirection, size, headPosition]);

  return headPosition;
}

export default useSnakeMovement;
