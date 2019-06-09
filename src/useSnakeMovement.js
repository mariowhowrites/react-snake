import { useState, useEffect } from "react";

function useSnakeMovement(startingPosition, size) {
  let [headPosition, setHeadPosition] = useState(startingPosition);
  let [direction, setDirection] = useState("up");

  let moveUp = () => {
    let newDepth = headPosition.depth - 1;

    if (newDepth < 2) {
      newDepth = size - 1;
    }

    setHeadPosition({
      width: headPosition.width,
      depth: newDepth
    });
  };

  let moveDown = () => {
    let newDepth = headPosition.depth + 1;

    if (newDepth > size - 1) {
      newDepth = 2;
    }

    setHeadPosition({
      width: headPosition.width,
      depth: newDepth
    });
  };

  let moveLeft = () => {
    let newWidth = headPosition.width - 1;

    if (newWidth < 2) {
      newWidth = size - 1;
    }

    setHeadPosition({
      depth: headPosition.depth,
      width: newWidth
    });
  };

  let moveRight = () => {
    let newWidth = headPosition.width + 1;

    if (newWidth > size - 1) {
      newWidth = 2;
    }

    setHeadPosition({
      depth: headPosition.depth,
      width: newWidth
    });
  };

  useEffect(() => {
    const keyboardActions = {
      up: moveUp,
      down: moveDown,
      left: moveLeft,
      right: moveRight
    };

    const id = setInterval(keyboardActions[direction], 100);

    return () => {
      clearInterval(id);
    };
  });

  useEffect(() => {
    const handleKeyboardEvents = e => {
      const keyboardActions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right"
      };

      if (Object.keys(keyboardActions).includes(e.key)) {
        setDirection(keyboardActions[e.key]);
      }
    };

    window.addEventListener("keyup", handleKeyboardEvents);

    return () => {
      window.removeEventListener("keyup", handleKeyboardEvents);
    };
  }, [headPosition.width, headPosition.depth]);

  return headPosition;
}

export default useSnakeMovement;

// what do I need to do?

// one effect for momentum:
// use direction
// set interval to move in direction
// clear interval when direction changes

// one effect for keyboard presses
// change direction on keyboard press
