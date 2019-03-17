import React, { Component } from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      filter: 'all'
    }
    this.nextTodoId = 0
  }
  render() {
    const { filter } = this.state
    const todos = this.filterTodos()
    return (
      <div>
        <TodoAdd addTodo={this.addTodo} />
        <TodoList todos={todos} toggleTodo={this.toggleTodo} />
        <TodoFooter filter={filter} toggleFilter={this.toggleFilter} />
      </div>
    )
  }

  filterTodos = () => {
    const { filter, todos } = this.state
    if (filter === 'all') {
      return [...todos]
    }
    const isCompleted = filter === 'completed'
    return todos.filter(todo => todo.completed === isCompleted)
  }

  addTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, {
        id: ++this.nextTodoId,
        text,
        completed: false
      }]
    })
  }

  toggleTodo = (id) => {
    console.log(id)
    const { todos } = this.state
    const todo = todos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    this.setState({
      todos: [...todos]
    })
  }

  toggleFilter = (filter) => {
    this.setState({ filter })
  }
}
