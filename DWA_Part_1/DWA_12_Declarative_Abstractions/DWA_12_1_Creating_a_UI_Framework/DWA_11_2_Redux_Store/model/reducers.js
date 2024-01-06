import { State } from './store.js'
import { Action } from './actions.js'

/**
 *
 * @param {State} state
 * @param {Action} action
 *
 * @return {State}
 */
export const reducer = (state, action) => {

  switch (action.type){

    case 'ADD_TASK': {
        return {
          ...state,
          phase: 'idle',
          tasks: {
            [action.task.id]: action.task,
            ...state.tasks,
          }
        }
    }
    case "CHANGE_SORT":{
      return {
        ...state,
        filters: {
          ...state.filters,
          sorting: action.sorting,
        }
      }
    }
    case 'TOGGLE_ADD': {
      return {
        ...state,
        phase: state.phase === 'adding' ? "idle" : 'adding',
      }
    }

    default:
      return state
  }


  return state
}