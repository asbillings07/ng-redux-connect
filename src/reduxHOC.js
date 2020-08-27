import React from 'react'
import { createStore } from '../redux/configureStore'
import { withRedux } from '../Hooks'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { compose } from '../Hooks/compose'

const [store, persistor] = createStore()

const reduxConnnect = withRedux(store)

const addReduxPersist = (Component) => (props) => {
  return (
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  )
}

export const composeConnect = compose(reduxConnnect, addReduxPersist)
