/**
 * @typedef {object} Item
 * @props {number | string} value
 */

/**
 * typedef {object} State
 * @prop {Item} wind
 * @prop {Item} temperature
 * @prop {Item} humidity
 */

/**
 * @callback Notify
 * @param {State} nnext
 * @param {State} prev
 */

/**
 * @callback Action
 * @param {State}
 * @returns {State}
 */

/**
 * @callback Update
 * @param {Action}
 */

/**
 * @callback Subscribe
 * @param {Notify} notify
 */

/**
 * @typedef {object} Store
 * @prop {Update} update
 * @prop {Subscribe} subscribe
 */

const initial = {
  wind: {
    value: 1,
  },
  temperature: {
    value: 1,
  },
  humidity: {
    value: 1,
  }
}


  /**
   * @type {Array<State>}
   */
  const states = [initial];

/**
 *
 * @type {Array<Notify>}
 */
const notifiers = []

  export const update = (action) => {
    if (typeof action !== 'function'){
      throw new Error ('action is required to be function')
    }

    const prev = Object.freeze({ ...states[0] });
    const next = Object.freeze({ ...action(prev) });

    states.unshift(next)
  }

/**
 * @param {Notify} notify
 * @returns {}
 */
export const subscribe = (notify) => {
    notifiers.push(notify)

  const unsubscribe = () => {}

  return unsubscribe;
  }


