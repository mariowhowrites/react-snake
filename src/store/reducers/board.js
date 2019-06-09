const defaultSize = 13;

const defaultState = {
  size: defaultSize,
  startPosition: {
    width: Math.ceil(defaultSize / 2),
    depth: Math.ceil(defaultSize / 2)
  }
};

export default function boardReducer(state = defaultState, action) {
  return state;
}
