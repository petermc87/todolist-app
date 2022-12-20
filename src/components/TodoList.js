import Todo from './Todo'

export default function TodoList ({
  todos,
  createTodo,
  updateTodo,
  deleteTodo,
  setNewTodo,
  newTodo,
  handleChange
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
          {/* <button onClick={() => createTodo()}>Create New Todo</button> */}
        </div>
      </div>
      {todos.length
        ? (
          <>
            <div className='list-items'>
              <h2>Todo Items</h2>
              <ul className='todolist'>
                {todos.filter((i) => !i.completed).map((todo) => {
                  return (
                    <Todo
                      key={todo._id}
                      todo={todo}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
                      setNewTodo={setNewTodo}
                      newTodo={newTodo}
                      handleChange={handleChange}
                    />
                  )
                })}
              </ul>
            </div>
            <div className='list-items'>
              <h2>Completed Items</h2>
              <ul className='todolist'>
                {todos.filter((i) => i.completed).map((todo) => {
                  return (
                    <Todo
                      key={todo._id}
                      todo={todo}
                      updateTodo={updateTodo}
                      deleteTodo={deleteTodo}
                      setNewTodo={setNewTodo}
                      newTodo={newTodo}
                      handleChange={handleChange}
                    />
                  )
                })}
              </ul>
            </div>
          </>
          )
        : (
          <h1>No Todos Added Here</h1>
          )}
    </>
  )
}
