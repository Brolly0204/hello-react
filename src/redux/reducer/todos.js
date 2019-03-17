import * as types from '../actions/actionType'

const initState = {
  isFetching: false,
  error: null,
  data: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case types.FETCH_TODO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case types.FETCH_TODO_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return {
        ...state,
        data: todos(state.data, action)
      } 
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          ...action.todo,
          completed: false
        }
      ]
    case types.TOGGLE_TODO:
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

export default reducer