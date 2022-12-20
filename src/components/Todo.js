import { useState } from 'react'

export default function Todo ({ todo, updateTodo, deleteTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <>
      <li className='todo-item'>
        <h3 onClick={(e) => {
          setShowInput(!showInput)
        }}
        >{todo.title}
        </h3>
        <input
          style={{ display: showInput ? 'block' : 'none' }}
          text='text'
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              updateTodo(todo._id, { title: evt, completed: todo.completed })
              setShowInput(false)
            }
          }}
        />
        <label className='middle'>
          <p>Complete</p>
          {/* <input type='checkbox' checked={todo.completed} onChange={(evt) => setNewTodo({ newTodo, completed: evt.target.checked })} /><br /> */}
          <input type='checkbox' checked={todo.completed} onChange={(evt) => updateTodo(todo._id, { title: todo.title, completed: false })} /><br />
          {/* <input type='checkbox' checked={todo.completed} onChange={handleChange} /><br />  */}
        </label>
        <br /><button onClick={() => deleteTodo(todo._id)}>Remove</button>
      </li>
    </>
  )
}
