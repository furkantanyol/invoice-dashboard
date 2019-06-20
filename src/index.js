import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app'
import DefaultErrorBoundary from 'components/DefaultErrorBoundary'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import 'styles.css'

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), thunk]
    : [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

ReactDOM.render(
  <DefaultErrorBoundary>
    <IntlProvider locale="en">
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
