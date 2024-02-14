import { ActionTypes } from './actions.js'

/**
 * Reducer function to handle state updates based on dispatched actions.
 * @param {Object} state The current state of the application.
 * @param {Object} action The action object dispatched to update the state.
 * @param {string} action.type The type of the action.
 * @returns {Object} The new state after applying the action.
 */
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