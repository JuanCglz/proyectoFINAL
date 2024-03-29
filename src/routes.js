const express = require('express')
const router = express.Router()

const users = require('./controllers/users.js')
const todos = require('./controllers/todos.js')
const auth = require('./middleware/auth')

router.get('/users', auth, users.getUser)
router.post('/login', users.login)
router.post('/logout', auth, users.logout)
router.post('/users', users.createUser)  // signup
router.patch('/users', auth, users.updateUser)
router.delete('/users', auth, users.deleteUser)

router.get('/todos/:id', auth, todos.getTodo)
router.get('/todos', auth, todos.getTodos)

//
router.get('/ttodos', todos.getTodosAll)
//

router.post('/todos', auth, todos.createTodo)
router.patch('/todos/:id', auth, todos.updateTodo)
router.delete('/todos/:id', auth, todos.deleteTodo)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /users or /todos'
  })
})

module.exports = router

