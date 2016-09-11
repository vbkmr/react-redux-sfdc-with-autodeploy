import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/containers/App'
import configureStore from './src/store/configureStore'

const store = configureStore()

/***************************************************************************************
Entry point of our SPA. Provider component is important to be able to use '{connect}' component
of react-redux. App is our base-parent component.
********************************************************************************************/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
