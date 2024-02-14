import { reducer } from './reducers.js';
/**
 * Represents the current state of the application.
 * @type {any} The current state.
 */
let currentState = undefined;
/**
 * An array containing all the subscribers to state changes.
 * @type {Function[]} An array of callback functions.
 */
let subscribers = [];

/**
 * Get the current state of the application.
 * @returns {any} The current state.
 */
export const getState = () => currentState;

/**
 * Dispatches an action to update the state of the application.
 * @param {Object} action The action to dispatch.
 */
export const dispatch = (action) => {
  currentState = reducer(currentState, action);
  notifySubscribers();
};

/**
 * Subscribes a callback function to state changes.
 * @param {Function} callback The callback function to subscribe.
 * @returns {Function} An unsubscribe function.
 */
export const subscribe = (callback) => {
  subscribers.push(callback);

  /**
   *  Return an unsubscribe function
   */
  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  };
};

/**
 * Notifies all subscribers about the state change.
 */
export const notifySubscribers = () => {
  subscribers.forEach((subscriber) => subscriber());
};

/**
 * Logs the current state to the console.
 */
export const logStateChange = () => {
  console.log('Current State:', currentState);

};

/**
 * Initialize the state using the reducer
 */
currentState = reducer(undefined, {type: 'init'});


