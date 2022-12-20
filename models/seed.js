require('dotenv').config()
const db = require('./db')
const ToDo = require('./todo')

db.on('open', () => {
  const starterToDos = [
    {
      title: 'Get eggs',
      completed: true
    },
    {
      title: 'Get bread',
      completed: false
    },
    {
      title: 'Get out of the apartment you mole',
      completed: false
    },
    {
      title: 'Get a new haircut',
      completed: false
    }
  ]
  ToDo.deleteMany({})
    .then(() => {
      ToDo.create(starterToDos)
        .then((createdToDos) => {
          console.log('all the created ToDos: ', createdToDos)
          db.close()
        })
        .catch((error) => {
          console.log(error)
          db.close()
        })
    })
    .catch((error) => {
      console.log(error)
      db.close()
    })
})
