import { useState, useEffect } from 'react'
import TodoList from '../../components/TodoList'
import '../../styles.css'

export default function App () {
  const [todos, setTodos] = useState([])
  const [foundTodo, setFoundTodo] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: false
  })
  // create
  const createTodo = async () => {
    try {
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
  // index
  const getTodos = async () => {
    try {
      const response = await fetch('/api/todos')
      console.log(response)
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }
  // delete
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }

      })
      const data = await response.json()
      setFoundTodo(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleChange = (evt) => {
    setNewTodo({ ...newTodo, [evt.target.name]: evt.target.value })
  }
  // update
  const updateTodo = async (id, updatedData) => {
    try {
      console.log(updatedData)
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...updatedData })
      })
      const data = await response.json()
      console.log(data)
      setFoundTodo(data)
    } catch (error) {
      console.error(error)

    }
  }

  useEffect(() => {
    getTodos()
  }, [foundTodo])

  return (
    <div className='App'>

      <TodoList
        todos={todos}
        createTodo={createTodo}
        getTodos={getTodos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        handleChange={handleChange}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />

    </div>
  )
}
