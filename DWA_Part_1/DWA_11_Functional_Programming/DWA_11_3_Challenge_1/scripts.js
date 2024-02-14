import { ActionTypes } from "./models/actions.js";
import { reducer } from "./models/reducers.js";
import { dispatch, logStateChange, subscribe } from "./models/store.js";

console.log("1: Initial state");
logStateChange();

console.log("2: Increment the counter by one");
const unsubscribeScenario2 = subscribe(logStateChange); // Subscribe to state changes
dispatch({ type: ActionTypes.ADD }); // Dispatch an "ADD" action
dispatch({ type: ActionTypes.ADD }); // Dispatch another "ADD" action
unsubscribeScenario2(); // Unsubscribe to stop logging state changes

console.log("3: Decrement the counter by one");
const unsubscribeScenario3 = subscribe(logStateChange);
dispatch({ type: ActionTypes.SUBTRACT }); // Dispatch a "SUBTRACT" action
unsubscribeScenario3();

console.log("4: Resetting the Tally Counter");
const unsubscribeScenario4 = subscribe(logStateChange);
dispatch({ type: ActionTypes.RESET }); // Dispatch a "RESET" action
unsubscribeScenario4();

