import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from 'reducers'

const middleware = applyMiddleware(logger)

export default createStore(reducers, composeWithDevTools(), middleware)
