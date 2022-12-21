export default function Todo ({ todo, updateTodo }) {
  return (
    <>
      <li className='todo-item'>
        <h3>{todo.title}</h3>
        <button
          onClick={() => {
            // console.log('update works')
            updateTodo(todo._id, {
              title: todo.title,
              completed: true
            })
          }}
              >Complete
        </button>
      </li>
    </>
  )
}


