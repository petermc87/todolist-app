export default function CreateTodo ({
  handleChange,
  newTodo,
  createTodo,
  setNewTodo
}) {
  return (
    <>
      <h1>Todo Tracker</h1>
      <div className='list-items'>
        <h2>Create Todo</h2>
        <div className='new-item'>
          <p>Enter your Todo below</p>
          <input
            id='input-field' value={newTodo.title} onChange={handleChange} placeholder='Hit return to add item'onKeyDown={(e) => {
              if (e.key === 'Enter') {
                createTodo()
              }
            }} name='title'
          />
            <p>Completed</p>
           <input type='checkbox' checked={newTodo.completed} onChange={(evt) => setNewTodo({ ...newTodo, completed: evt.target.checked })} /><br />

        </div>
      </div>
    </>
  )
}
