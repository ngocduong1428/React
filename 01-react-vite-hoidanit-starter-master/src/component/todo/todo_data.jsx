const TodoData = (props) => {
    const { name, age } = props
    return (<div className='todo-data'>
        <div>Learning react</div>
        <div>{name} - {age}</div>
    </div>)
}
export default TodoData