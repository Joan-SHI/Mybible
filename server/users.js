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
  console.log(req.params.id);
  
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      console.log(user);
      
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
    res.status(201).json({message: ids})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.patch('/:id', (req,res) => {
  const id = Number(req.params.id)

  const user = req.body

  db.updateUser(user.id, user)
  .then(() => {
    res.json({message: 'Done'})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/:id', (req,res) => {
  const id = Number(req.params.id)
  console.log('delete', id)

  db.deleteUser(id)
  .then(() => {
    res.json({message: 'Done'})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
