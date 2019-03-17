import React, { Component } from 'react'

export default class TodoFooter extends Component {

  render() {
    const { filter, toggleFilter } = this.props
    return (
      <div>
        <span>show: </span>
        <button disabled={filter === 'all'} onClick={() => toggleFilter('all')}>All</button>
        <button disabled={filter === 'active'} onClick={() => toggleFilter('active')} >Active</button>
        <button disabled={filter === 'completed'} onClick={() => toggleFilter('completed')}>Completed</button>
      </div>
    )
  }
}
