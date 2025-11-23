const TodoData = (props) => {

    const { todoList, setTodo } = props

    const Delete_item = (key) => {
        setTodo(todoList.filter((todo) => todo.id !== key))

    }

    return (<div className='todo-data'>
        <div>Learning react</div>
        <div>{todoList.map((todo) => {
            return (<div className="todo_item" key={todo.id}>
                <div>{todo.name}</div>
                <button onClick={() => Delete_item(todo.id)} style={{ cursor: 'pointer' }}>delete</button>

            </div>)
        })}</div>
    </div >)
}
export default TodoData