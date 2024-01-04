export const increase = (state) => {
  return {
    ...state,
    value: state.value + 1
  }
}

export const decrease = (state) => {
  return {
    ...state,
    value: state.value - 1
  }
}


export const get = (state, key) => {
  return state[key]
}
