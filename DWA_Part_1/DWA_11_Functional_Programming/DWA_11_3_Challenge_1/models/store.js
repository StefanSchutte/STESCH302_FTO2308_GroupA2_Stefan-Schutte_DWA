const { reducer } = require('./reducers.js');
// import { reducer } from './reducers.js';
//import { ActionTypes } from './actions';

let currentState = undefined;
let subscribers = [];

// Get the current state
export const getState = () => currentState;

// Dispatch an action to update the state
export const dispatch = (action) => {
  currentState = reducer(currentState, action);
  notifySubscribers();
};

// Subscribe to state changes
export const subscribe = (callback) => {
  subscribers.push(callback);

  // Return an unsubscribe function
  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  };
};

// Notify all subscribers about the state change
export const notifySubscribers = () => {
  subscribers.forEach((subscriber) => subscriber());
};

// Log the current state to the console
export const logStateChange = () => {
  console.log('Current State:', currentState);

};

// Initial state
currentState = reducer(undefined, {});


