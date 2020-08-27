const composeReducer = (arg, func) => (...args) => arg(func(...args))

export const compose = (...funcs) => {
  return funcs.reduce(composeReducer, (arg) => arg)
}
