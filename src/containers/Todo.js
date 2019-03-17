import React, { Component } from 'react'
import TodoAddContainer from './TodoAddContainer'
import TodoListContainer from './TodoListContainer'
import TodoFooterContainer from './TodoFooterContainer'

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
        <TodoAddContainer addTodo={this.addTodo} />
        <TodoListContainer todos={todos} toggleTodo={this.toggleTodo} />
        <TodoFooterContainer filter={filter} toggleFilter={this.toggleFilter} />
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
