export default function CompleteTodo ({ todo, deleteTodo }) {
  return (
    <>
      <li className='todo-item'>
        <h3>{todo.title}</h3>
        <br /><button
          onClick={() => {
            deleteTodo(todo._id)
          }}
              >Delete
        </button>
      </li>
    </>
  )
}
