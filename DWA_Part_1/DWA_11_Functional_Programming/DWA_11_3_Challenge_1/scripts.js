import { ActionTypes } from "./models/actions.js";
import { reducer } from "./models/reducers.js";
import { dispatch, logStateChange, subscribe } from "./models/store.js";

console.log("1: Initial state");
logStateChange();

console.log("2: Increment the counter by one");
const unsubscribeScenario2 = subscribe(logStateChange);
dispatch({ type: ActionTypes.ADD });
dispatch({ type: ActionTypes.ADD });
unsubscribeScenario2();

console.log("3: Decrement the counter by one");
const unsubscribeScenario3 = subscribe(logStateChange);
dispatch({ type: ActionTypes.SUBTRACT });
unsubscribeScenario3();

console.log("4: Resetting the Tally Counter");
const unsubscribeScenario4 = subscribe(logStateChange);
dispatch({ type: ActionTypes.RESET });
unsubscribeScenario4();

