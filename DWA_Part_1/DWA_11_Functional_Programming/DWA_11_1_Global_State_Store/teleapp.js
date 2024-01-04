//built tele app w class

class Counter {
  value = 1;

  increase() {
    this.value += 1;
  }

  decrease() {
    this.value -= 1;
  }

  log(){
    console.log(this.value)
  }
}

const instance = new Counter();
instance.increase()
instance.decrease();
instance.log()

const temperature = new Counter();
const humidity = new Counter();
const wind = new Counter();

//date-fns library

// how to do this in functional programming

//this is where all the side effects live
// const state = {
//   value: 1,
// }

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

const increase = (state) => {
  return {
    ...state,
    value: state.value + 1
  }
}

const decrease = (state) => {
  return {
    ...state,
    value: state.value - 1
  }
}

// const log = (state, callback) => {
//   callback(state.value)
// }

const get = (state, key) => {
  return state[key]
}
//logic
//store


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
 * @typedef {object} Store
 * @props {Update} update
 */



const createStore = (initial) =>{
let state = initial

  const update = (action) => {
    if (typeof action !== 'function'){
      throw new Error ('action is required to be function')
    }
  }

  return{
  update:{}
  }
}







fetch('https://google.com/user')
  .then (response => {
    if (!response.ok) throw new Error('Invalid response')
    return response
  })
  .then(response => response.json())
  .then(data => data.id)
  .then(console.log)


