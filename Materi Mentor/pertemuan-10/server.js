const express = require('express')
const bodyParser = require('body-parser')

// db
const db = require('./db/db')

// set up exprees
const app = express();

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// get all data
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'todos berhasil di ambil',
    todos: db
  })
})

// post data
app.post('/api/v1/todos', (req, res) => {
  // req.body.{key object}
  if (!req.body.title) {
    return res.status(400).send({
      success: false,
      message: 'title is required'
    })
  } else if (!req.body.description) {
    return res.status(400).send({
      success: false,
      message: 'description is required'
    })
  }

  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  db.push(todo)
  return res.status(201).send({
    success: true,
    message: "todo berhasil di tambah",
    todo
  })
})

// get one data
// url : /api/v1/todos/1
app.get('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  db.map((todo) => {
    if (todo.id === id) {
      return res.status(200).send({
        success: true,
        message: 'todo berhasil di ambil',
        todo
      })
    }
  })
  return res.status(404).send({
    success: false,
    message: 'data tidak ditemukan'
  })
})

// delete data
app.delete('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  db.map((todo, index) => {
    if (todo.id === id) {
      db.splice(index, 1)
      return res.status(200).send({
        success: true,
        message: 'todo berhasil di hapus'
      })
    }
  })
  return res.status(404).send({
    success: false,
    message: 'data tidak ditemukan'
  })
})

// updata data
app.put('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let findTodo
  let todoIndex
  db.map((todo, index) => {
    if (todo.id === id) {
      findTodo = todo
      todoIndex = index
    }
  })

  if (!findTodo) {
    return res.status(404).send({
      success: false,
      message: 'todo not found'
    })
  }

  if (!req.body.title) {
    return res.status(400).send({
      success: false,
      message: 'title is required'
    })
  } else if (!req.body.description) {
    return res.status(400).send({
      success: false,
      message: 'description is required'
    })
  }

  const updatedTodo = {
    id: findTodo.id,
    title: req.body.title || findTodo.title,
    description: req.body.description || findTodo.description,
  }

  db.splice(todoIndex, 1, updatedTodo)

  return res.status(201).send({
    success: true,
    message: 'berhasil di update',
    updatedTodo
  })
})

app.listen(3000, () => {
  console.log('Server is Running')
})