import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo()
  }
  render() {
    const { toggleTodo } = this.props
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}></TodoItem>
          ))
        }
      </ul>
    )
  }
}
