# ng-redux-connect

This package allows you to connect your Redux, and other providers to your React components without wrapping the root with a provider.

note: this package assumes you will be using the Redux
hooks as the Redux connect HOC is not support with this.

## Why would I want this?

This package is especially useful if you coding in a project where you can't access the root of your application. For example, if you are in the process of migrating from AngularJS to React, AngularJS would still control the root of your application. You could use this package to wrap each component as they are built so you could use Redux.

## How to use

- `You will need redux, react-redux, and redux installed to properly use this package`
- `npm install ng-redux-connect`

```
First, you will need to setup your redux store.
Then, in a new file import your createStore or configureStore

reduxConnector provides your component with a redux Provider
you will only need to provide the store.

Finally, import reduxConnector as show below:
```

```
import { reduxConnector } from 'ng-redux-connect'

const store = createStore()

export const reduxConnnect = reduxConnector(store)

```

Then just import and wrap your component like so:

import { reduxConnect } from '../whereEverYouCreatedTheReduxConnector'

const CoursesWithRedux = reduxConnect(Courses)

```
That's it, now you can use redux like you would before.
```

## Adding extra functionality

```
What if you're using something like Redux Persist or you have a
themeProvider or you have other HOCs that you want to use.
ng-redux-connect can handle this as well.
```

```
Using the composer function allows you to use as many HOCs as you need for your components.
```

```
Here is an example with ReduxPersist:

```

```
First, create your HOC:

import { PersistGate } from 'redux-persist/lib/integration/react'


const addReduxPersist = (Component) => (props) => {
  return (
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  )
}

```

```
Next, let's add add compose from ng-redux-connect

import { composer } from 'ng-redux-connect'

```

```
Now, let's add our HOCs to our composer. The composer will wrap your component
with any and all HOC(s) you provide.

export const composerConnect = composer(reduxConnnect, addReduxPersist)
```

```
Finally, instead of wrapping your component in the reduxConnect,
you can wrap it in the composerConnect

composerConnect(Component)
```

```
Alternatively, you can complete the same task in a single file:

const reduxConnect = reduxConnector(store)
const addReduxPersist = (Component) => (props) => {
  return (
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  )
}

// we are passing in both the reduxConnect and reduxPersist HOC
// then we are calling the composer function passing in our component
const WrappedApp = composer(reduxConnect, addReduxPersist)(Component)

```
