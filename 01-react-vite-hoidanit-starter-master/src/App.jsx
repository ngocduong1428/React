import './component/todo/todo.css'


const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <div className='todo-new'>
        <input type="text" />
        <button>Add</button>
      </div>
      <div className='todo-data'>
        <div>Learning react</div>
        <div></div>
      </div>
    </div>
  )
}

export default App
