 
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { simpleReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  simpleReducer
})

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ))

export default store