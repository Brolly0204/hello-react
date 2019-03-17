import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  console.log(store.getState())
})

export default store

