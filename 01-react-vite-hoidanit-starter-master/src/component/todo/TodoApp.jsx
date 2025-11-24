import './todo.css'
import './todo_new'
import TodoNew from './todo_new'
import TodoData from './todo_data'
import logo from "../../assets/react.svg"
import { useState } from 'react'

const TodoApp = () => {
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

export default TodoApp