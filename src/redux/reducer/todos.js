import { ADD_TODO, TOGGLE_TODO } from '../actions/actionType'

const initState = []

const todos = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          ...action.todo,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return [
        ...state.map(todo => {
          todo.id === action.id && (todo.completed = !todo.completed)
          return todo
        })
      ]
    default:
      return state  
  }
}

export default todos