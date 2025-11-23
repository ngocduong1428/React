import './component/todo/todo.css'
import './component/todo/todo_new'
import TodoNew from './component/todo/todo_new'
import TodoData from './component/todo/todo_data'
import logo from "./assets/react.svg"
import { useState } from 'react'
const App = () => {
  const [todo, setTodo] = useState([
  ])


  const NewTodo = (name) => {
    const newtodo = {
      id: todo.length + 1,
      name: name
    }
    setTodo([...todo, newtodo])
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        NewTodo={NewTodo} />
      {todo.length > 0 ?
        <TodoData
          todoList={todo}
          setTodo={setTodo}
        />
        :
        <div className='todo-image'>
          <img src={logo} className='logo' />
        </div>
      }


    </div>
  )
}


export default App
