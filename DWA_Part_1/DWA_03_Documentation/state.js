/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - priority that tasks should take in terms of how
 * quickly it should be completed
 * @typedef {'recent'|'oldest'|'upcoming'}Sorting - One of three
 * possible predefined ordering approaches that can be shown in. `recent` arranges based on the tasks
 * that were created closest to the current date, `oldest` does the opposite and ` upcoming`
 * arranges based on the closest due date.(if no due date it will be placed last.)
 */

/**
 * Creates a unique ID to be used in the app. Value is created by combining two randomized numbers
 * with the current timestamp. The value are divided by dashes (-) in order to ensure
 * that the value is treated as a string (and not a number)
 *
 * @returns{string}
 */
const createId = ()=> {}

/**
 * @typedef {object} Task - An object representing a task to be shown to a user
 * @prop{string} id - unique generated by {@link createId} value used to identify a task
 * @prop{string} title  short description of what task entails
 * @prop{boolean} completed - whether the task has been completed or not
 * @prop{Date}} created - The exact date when the task was created in the system
 * @prop{null | Date} due - A user specified date for when the task should be completed
 * @prop{Urgency} Urgency - A user specified indication of how important the task
 *
 */

/**
 * @typedef {object} Filters
 * @prop {string} search
 * @prop {Urgency | 'any'} urgency
 * @prop{Sorting}Sorting
 */

/**
 * @typedef {object}State
 * @prop {Record<string, Task>} tasks
 * @prop {Array<string>} displaying
 * @prop {Filters} Filter
 */

/**
 * @type {State}
 */
export const state = {
    tasks: {},
    displaying: [],

    filters: {
        search: "",
        sorting: "recent",
        urgency: "any",
    },
};