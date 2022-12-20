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
      {/* Title<input value={newTodo.title} onChange={handleChange} name='title' /> */}
      Title<input value={newTodo.title} onChange={handleChange} onKeyDown={(e) => {
            if (e.key === 'Enter') {
                createTodo()
            }}} name='title' />
      Completed<input type='checkbox' checked={newTodo.completed} onChange={(evt) => setNewTodo({ ...newTodo, completed: evt.target.checked })} /><br />
      {/* <button onClick={() => createTodo()}>Create New Todo</button> */}
      {todos.length
        ? (
          <>
            <h1>Todo Items</h1>
            <ul className='todolist'>
              {todos.filter((i) => !i.completed).map((todo) => {
                return (
                  <Todo
                    key={todo.id}
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
            <h1>Completed Items</h1>
            <ul className='todolist'>
              {todos.filter((i) => i.completed).map((todo) => {
                return (
                  <Todo
                    key={todo.id}
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
          </>
          )
        : (
          <h1>No Todos Added Here</h1>
          )}
    </>
  )
}
