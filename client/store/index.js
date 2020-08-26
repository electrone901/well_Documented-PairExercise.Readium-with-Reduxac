import { createStore, combineReducers, applyMiddleware } from 'redux'
// lgos our actions
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// sets our  redux - devtools
import { composeWithDevTools } from 'redux-devtools-extension'

// stories store that has its own reducer 
import stories from './stories'

// combines several reducers into a single reducer
const reducer = combineReducers({
  stories
})

// sets our  redux - devtools
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)

const store = createStore(reducer, middleware)

export default store
