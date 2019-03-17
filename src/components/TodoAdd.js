import React, { Component } from 'react'

export default class TodoAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  addTodo = () => {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.addTodo()
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} onKeyDown={this.handleEnter} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}
