"use strict"

// deps
  // natives
  const { join } = require('path')

  // externals
  const express = require('express')
  const cors = require('cors')
  const { Sequelize } = require('sequelize')
  const cookieParser = require('cookie-parser')
  const bodyParser = require('body-parser')

  // locals
  const { getUser,
          getSession,
          getRole,
          getQuestion,
          getCategory,
          getDifficulty,
          getScore,
          getRel_question_category
        } = require(join(__dirname, 'definitions', 'definitions.js'))

  const { controllerAPILogin,
          controllerAPISession,
          controllerAPISignin,
          controllerAPIGetQuestion,
          controllerAPIGetQuestions,
          controllerAPIAddQuestion,
          controllerAPIEditQuestion,
          controllerAPIDeleteQuestion
        } = require(join(__dirname, 'controllers', 'controllers.js'))

  const { middlewareCheckUser,
          middlewareCheckNotSimpleUser,
          middlewareCheckAdminUser
        } = require(join(__dirname, 'middleware', 'middlewares.js'))

// consts
const app = express()
const port = 8000
const sequelize = new Sequelize('malkuizz', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})
const User = getUser(sequelize)
const Session = getSession(sequelize)
const Role = getRole(sequelize)
const Question = getQuestion(sequelize)
const Difficulty = getDifficulty(sequelize)
const Category = getCategory(sequelize)
const Score = getScore(sequelize)
const Rel_question_category = getRel_question_category(sequelize)

// module
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

// SQL associations
User.hasMany(Session, { foreignKey: 'userID'})
Session.belongsTo(User, { foreignKey: 'userID'})

User.hasOne(Role, { foreignKey: 'roleID'})
Role.belongsTo(User, { foreignKey: 'roleID'})

app.User= User
app.Session= Session
app.Role= Role
app.Question= Question
app.Category= Category
app.Difficulty= Difficulty
app.Score= Score
app.Rel_question_category= Rel_question_category

// APP PUBLIC
// HTML
app.get('/', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'index.html'))

})
.get('/public/bootstrap.min.css', (req, res) => {

  res.sendFile(join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'))

})
// CSS
.get('/public/css', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'css', 'app.css'))

})
// JS
.get('/public/bootstrap.min.js', (req, res) => {

  res.sendFile(join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.min.js'))

})
.get('/public/main.js', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'main.js'))

})
// IMG
.get('/public/img/malkuizz.png', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'img', 'malkuizz.png'))

})
.get('/public/img/edit24.png', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'img', 'edit24.png'))

})
.get('/public/img/delete24.png', (req, res) => {

  res.sendFile(join(__dirname, 'public', 'img', 'delete24.png'))

})

// APP API 
app.get('/api/session/:token', async (req, res) => {

  controllerAPISession( app, req, res )

})

.post('/api/login', async (req, res) => {

  controllerAPILogin( app, req, res )

})

.post('/api/signin', async ( req, res ) => {

  controllerAPISignin( app, req, res )

})

// Middleware to authenticate the user
// .use(async ( req, res, next ) => {

//   middlewareCheckUser( app, req, res, next )

// })

// Middleware for admin and moderator route
// .use(async ( req, res, next ) => {

//   middlewareCheckNotSimpleUser( app, req, res, next )

// })

.get('/api/questions', async (req, res) => {

  controllerAPIGetQuestions( app, req, res )

})

.get('/api/question/:id', async (req, res) => {

  controllerAPIGetQuestion( app, req, res )

})

.put('/api/questions', async (req, res) => {

  controllerAPIAddQuestion( app, req, res )

})

.post('/api/question/:id', async (req, res) => {

  controllerAPIEditQuestion( app, req, res )

})

.delete('/api/question/:id', async (req, res) => {

  controllerAPIDeleteQuestion( app, req, res )

})

// Middleware for admin route
// .use(async ( req, res, next ) => {

//   middlewareCheckAdminUser( app, req, res, next )

// })

// Global 404
.use(function(req, res) {

  res.status(404);
  res.json({code: "NOT_FOUND", message: 'Page not found' });

});

sequelize.authenticate().then(() => {

  console.log('Connection has been established successfully.')

  app.listen(port, async () => {

    console.log(`Example app listening on port ${port}`)

  })
}).catch ((error) => {

  console.error('Unable to connect to the database:', error)
  
})