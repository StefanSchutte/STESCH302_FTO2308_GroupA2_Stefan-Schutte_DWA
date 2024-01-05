

// Define action types
const ActionTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  RESET: 'RESET',
};

const reducer = (state = { count: 0 }, action) => {
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

let currentState = undefined;
let subscribers = [];

// Get the current state
const getState = () => currentState;

// Dispatch an action to update the state
const dispatch = (action) => {
  currentState = reducer(currentState, action);
  notifySubscribers();
};

// Subscribe to state changes
const subscribe = (callback) => {
  subscribers.push(callback);

  // Return an unsubscribe function
  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  };
};

// Notify all subscribers about the state change
const notifySubscribers = () => {
  subscribers.forEach((subscriber) => subscriber());
};

// Log the current state to the console
const logStateChange = () => {
  console.log('Current State:', currentState);

};

// Initial state
currentState = reducer(undefined, {});


// Scenario 1: Initial state
console.log("Scenario 1: Initial state");
logStateChange(); // This should display a count of 0

// Scenario 2: Increment the counter by one
console.log("\nScenario 2: Increment the counter by one");
const unsubscribeScenario2 = subscribe(logStateChange); // Subscribe to state changes
dispatch({ type: ActionTypes.ADD }); // Dispatch an "ADD" action
dispatch({ type: ActionTypes.ADD }); // Dispatch another "ADD" action
unsubscribeScenario2(); // Unsubscribe to stop logging state changes

// Scenario 3: Decrement the counter by one
console.log("\nScenario 3: Decrement the counter by one");
const unsubscribeScenario3 = subscribe(logStateChange); // Subscribe to state changes
dispatch({ type: ActionTypes.SUBTRACT }); // Dispatch a "SUBTRACT" action
unsubscribeScenario3(); // Unsubscribe to stop logging state changes

// Scenario 4: Resetting the Tally Counter
console.log("\nScenario 4: Resetting the Tally Counter");
const unsubscribeScenario4 = subscribe(logStateChange); // Subscribe to state changes
dispatch({ type: ActionTypes.RESET }); // Dispatch a "RESET" action
unsubscribeScenario4(); // Unsubscribe to stop logging state changes

