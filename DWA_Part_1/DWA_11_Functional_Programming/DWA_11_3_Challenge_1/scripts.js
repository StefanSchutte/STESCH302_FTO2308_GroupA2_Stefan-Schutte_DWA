import { ActionTypes } from "./models/actions.js";
import { reducer } from "./models/reducers.js";
import { dispatch, logStateChange, subscribe } from "./models/store.js";


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

