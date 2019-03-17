import * as types from './actionType'

let nextId = 0

const fetchTodoRequest = () => ({
  type: types.FETCH_TODO_REQUEST
})

const fetchTodoSuccess = (data) => ({
  type: types.FETCH_TODO_SUCCESS,
  data
})

const fetchTodoFail = (error) => ({
  type: types.FETCH_TODO_FAIL,
  error
})

// 异步action
export const fetchTodo = () => {
  return dispatch => {
    dispatch(fetchTodoRequest())
    return fetch('/mock/todos.json').then(res => {
      res.json().then(data => {
        dispatch(fetchTodoSuccess(data))
      })
    }, err => {
      dispatch(fetchTodoFail(err))
    })
  }
}

/** 
 * 新增待办事项
*/
export const addTodo = (text) => ({
  type: types.ADD_TODO,
  todo: {id: nextId++, text}
})

/**
 * 更改待办事项
 */
 export const toggleTodo = (id) => ({
   type: types.TOGGLE_TODO,
   id
 })

 /**
  * 设置过滤状态
  */
 export const setFilter = filter => ({
   type: types.SET_FILTER,
   filter
 })

 /**
  * 设置TODO文本
  */
  export const setTodoText = text => ({
    type: types.SET_TODO_TEXT,
    text
  })