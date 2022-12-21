import CreateTodo from './CreateTodo'
import CompleteTodo from './CompleteTodo'
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
      <CreateTodo
        createTodo={createTodo}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        handleChange={handleChange}
      />
      {todos.length
        ? (
          <>
            <div className='list-items'>
              <h2>Todo Items</h2>
              <ul className='todolist'>
                {todos.filter((i) => !i.completed).map((todo) => {
                  return (
                    <Todo
                      todo={todo}
                      updateTodo={updateTodo}
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
                    <CompleteTodo
                      todo={todo}
                      deleteTodo={deleteTodo}
                    />
                  )
                })}
              </ul>
            </div>
          </>
          )
        : (
          <h2>No Todos Added Here</h2>
          )}
    </>
  )
}
