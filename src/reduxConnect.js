import React from 'react'
import { Provider } from 'react-redux'

export const reduxConnector = (store) => (Component) => (props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
