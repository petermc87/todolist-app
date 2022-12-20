import { useState } from 'react'

export default function Todo ({ todo, updateTodo, deleteTodo, setNewTodo, newTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <>

      <li>
        <h3 onClick={(e) => {
          setShowInput(!showInput)
        }}
        >{todo.title}
        </h3>
        <input
          style={{ display: showInput ? 'block' : 'none' }}
          text='text'
          onKeyDown={(updatedData) => {
            if (updatedData.key === 'Enter') {
              updateTodo(todo._id, updatedData)
              setShowInput(false)
            }
          }}

        />
        <label className='middle'>
          Complete
          {/* <input type='checkbox' checked={todo.completed} onChange={(evt) => setNewTodo({ newTodo, completed: evt.target.checked })} /><br /> */}
          <input type='checkbox' checked={todo.completed} onChange={(evt) => updateTodo(todo._id, evt)} /><br />
        </label>
        {/* and it is {todo.completed ? 'its complete' : 'its not complete'} */}
        <br /><button onClick={() => deleteTodo(todo._id)}>Delete Todo</button>

      </li>

      {/* <li>
            <div className='left'>
                <h2
                onClick={(e) => {
                    setShowInput(!showInput)
                }}>
                    {todo.text}
                </h2>
                <input
                    style={{ display: showInput ? 'block' : 'none'}}
                    text='text'
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            updateTodo(todo.id, e)
                            setShowInput(false)
                        }
                    }}
                />
            </div>
            <label className='middle'>
                Complete
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={(e) => {
                        updateTodo(todo.id, e)
                    }}
                />
            </label>
            <button
                checked={todo.completed}
                onClick={(e) => {
                    deleteTodo(todo.id)
                }}
            >
                Delete Todo
            </button>
        </li> */}
    </>
  )
}
