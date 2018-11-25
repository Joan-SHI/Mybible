const path = require('path')
const express = require('express')

const redditRoutes = require('./reddit')
const userRoutes = require('./users')

const server = express()

server.use(express.json())


server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)
server.use('/api/v1/user', userRoutes)

module.exports = server
