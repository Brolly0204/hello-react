import * as types from './actionType'

let nextId = 0

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