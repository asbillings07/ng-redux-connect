const composeReducer = (arg, func) => (...args) => arg(func(...args))

export const composer = (...funcs) => {
  return funcs.reduce(composeReducer, (arg) => arg)
}
