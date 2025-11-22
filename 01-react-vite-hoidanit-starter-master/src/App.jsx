import './component/todo/todo.css'
import './component/todo/todo_new'
import TodoNew from './component/todo/todo_new'
import TodoData from './component/todo/todo_data'
import logo from "./assets/react.svg"
const App = () => {
  const duong = "hoi dan it"
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={duong}
        age={20} />
      <div className='todo-image'>
        <img src={logo} className='logo' />
      </div>
    </div>
  )
}

export default App
