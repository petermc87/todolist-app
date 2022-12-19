import { useState, useEffect } from 'react'
import TodoList from '../../components/TodoList';
// import Todo from '../../components/Todo';

export default function App() {
  const [todos, setTodos] = useState([])
  const [foundTodo, setFoundTodo] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title:'',
    completed: false
  })
  //create
  const createTodo = async () => {
    try{
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newTodo })
      })
      const data = await response.json()
      setFoundTodo(data)
      setNewTodo({
        title: '',
        completed: false
      })
    } catch (error) {
      console.error(error)
    }
  }
  //index
  const getTodos = async () => {
    try{
      const response = await fetch('/api/todos')
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }
  //delete
  // const deleteTodo = async (id) => {
  //   try {
  //     const response
  //   }
  // } 
  const handleChange = (evt) => {
    setNewTodo({ ...newTodo, [evt.target.name]: evt.target.value })
  }




  useEffect(() => {
    getTodos()
  }, [foundTodo])


  return (
    <div className="App">
      {/* <Todo/>
      <TodoList/> */}
      {'Title'}<input value={newTodo.title} onChange={handleChange} name='title'/>
      {'Completed'}<input type='checkbox' checked={newTodo.completed} onChange={(evt) => setNewTodo({ ...newTodo, completed: evt.target.checked })}/><br />
      <button onClick={() => createTodo()}>Create New Todo</button>
      {
        foundTodo ? <div>
          <h1>{foundTodo.title}</h1>
          <h2>{foundTodo.completed ? 'I am complete' : 'I am not complete'}</h2>
        </div>
        : <>No Todos to Display</>
      }
      {
        todos && todos.length ? (
            <ul>
              {
                todos.map((todo) => {
                  return(
                    <li>
                      {todo.title} and it is {todo.completed ? 'its complete' : 'its not complete'}
                    </li>
                  )
                })
              }
            </ul>
        ) : <h1>No todos to display yet</h1>
      }
    </div>
  );
}

// export default App;