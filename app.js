"use strict";

// deps
  // natives
  const { join } = require('path')
  const fs = require("fs");

  // externals
  const express = require('express')
  const cors = require('cors');
  const { Sequelize } = require('sequelize');

  // locals
  const user = require(join(__dirname, 'definitions', 'User'))

// consts
const app = express()
const port = 8000
const sequelize = new Sequelize('malkuizz', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const User = user(sequelize)

// module

app.use(cors())

// APP PUBLIC
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})
.get('/public/bootstrap.min.css', (req, res) => {
  res.sendFile(join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'))
})
.get('/public/bootstrap.min.js', (req, res) => {
  res.sendFile(join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.min.js'))
})
.get('/public/main.js', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'main.js'))
})

// APP API
.post('/api/login', async (req, res) => {
  const user = await User.findAll()
  // console.log(user.json)
  res.json(user)
//  console.log(req);
})


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
  app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch ((error) => {
  console.error('Unable to connect to the database:', error)
})