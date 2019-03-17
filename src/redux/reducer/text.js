import { SET_TODO_TEXT } from '../actions/actionType'

const text = (state = '', action) => {
  switch(action.type) {
    case SET_TODO_TEXT:
      return action.text
    default:
      return state  
  }
}

export default text