import React, { Component } from 'react'
import Todo from './containers/Todo'
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Todo />
        </Provider>
      </div>
    )
  }
}
