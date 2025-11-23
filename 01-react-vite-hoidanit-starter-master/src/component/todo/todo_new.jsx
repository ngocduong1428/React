import { useState } from 'react'
const TodoNew = (props) => {
    const { NewTodo } = props

    const [value, setValue] = useState('eric')
    const handleClick = () => {
        {
            value.length > 0 ?
                NewTodo(value)
                :
                alert('Vui long nhap du lieu')
            setValue('')
        }



    }
    const handleOnchange = (names) => {
        setValue(names)
    }
    return (<div className='todo-new'>
        <input type="text"
            value={value}
            onChange={(event) => handleOnchange(event.target.value)}
        />
        <button style={{ cursor: 'pointer' }}
            onClick={handleClick}>Add</button>
    </div>)
}
export default TodoNew