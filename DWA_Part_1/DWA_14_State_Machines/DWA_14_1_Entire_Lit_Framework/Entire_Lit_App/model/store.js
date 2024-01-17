import { Action} from './actions.js'
import { reducer } from './reducers.js'

/**
 * @typedef {object} Task
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 * @prop {'low'|'normal'|'high'} urgency
 * @prop {Date|null} due
 * @prop {boolean} completed
 */
export const Task = {}

/**
 * @typedef {'A-Z'| 'Z-A'} Sorting
 */
export const Sorting = {}

/**
 * @typedef {object} Filters
 * @prop {Sorting} sorting
 */

/**
 * @typedef {object} State
 * @prop {'idle'|'adding'} phase
 * @prop {Record<string, Task>} tasks
 * @prop {Filters} filters
 */

export const State = {}

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

// /**
//  * @typedef {object} Store
//  *@prop {GetState} getState
//  * @prop {Subscribe} subscribe
//  * @prop {Dispatch} dispatch
//  */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */

const states = [{

  phase: 'idle',
  tasks: {},
  filters: {
    sorting: 'A-Z',
  },
}];

/**
 * @return {State}
 */
export const getState = () => {
  return Object.freeze({ ...states[0]
  });
}

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
  const prev = getState();
  const next = reducer(prev, action);

  subscribers.forEach((item) => item(prev, next))


  states.unshift(next)
}

/**
 * @param {Subscription} subscription
 * @return {EmptyFn}
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription)

  const handler = (item) => item !== subscription

  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler)
    subscribers = newSubscribers;
  }
  return unsubscribe
}