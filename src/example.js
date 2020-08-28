import React from 'react'
import { createStore } from '../redux/configureStore'
import { reduxConnector } from '../Hooks'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { compose } from '../Hooks/compose'

const [store, persistor] = createStore()

const reduxConnect = withRedux(store)

const addReduxPersist = (Component) => (props) => {
  return (
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  )
}

//
