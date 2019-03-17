import { connect } from 'react-redux'
import TodoAdd from '../components/TodoAdd'
import { addTodo, setTodoText } from '../redux/actions'


const mapStateToProps = state => ({
  text: state.text
})

const mapDispatchToProps = dispatch => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)