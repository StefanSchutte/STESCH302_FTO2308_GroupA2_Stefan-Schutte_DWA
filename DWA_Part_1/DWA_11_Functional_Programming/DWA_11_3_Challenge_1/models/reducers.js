import { ActionTypes } from './actions.js'

export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return { count: state.count + 1 };
    case ActionTypes.SUBTRACT:
      return { count: state.count - 1 };
    case ActionTypes.RESET:
      return { count: 0 };
    default:
      return state;
  }
};