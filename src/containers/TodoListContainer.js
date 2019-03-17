import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../redux/actions'

const filterTodos = (todos, filter) => {
  switch(filter) {
    case 'all':
      return todos
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos  
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)