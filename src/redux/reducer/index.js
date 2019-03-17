import { combineReducers } from 'redux'
import filter from './filter'
import text from './text'
import todos from './todos'

export default combineReducers({
  filter,
  text,
  todos
})