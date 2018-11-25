const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/create', (req,res) => {
  console.log(req.body)

  db.saveUser(req.body)
  .then(ids => {
    res.status(201).json({message: 'user created'})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.patch('/:id', (req,res) => {
  const id = Number(req.params.id)

  const user = req.body

  db.updateUser(id, user)
  .then(() => {
    res.json({message: 'Done'})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.delete('/:id', (req,res) => {
  const id = Number(req.params.id)

  db.deleteUser(id)
  .then(() => {
    res.json({message: 'Done'})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
