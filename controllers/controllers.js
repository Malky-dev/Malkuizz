const { join } = require('path')

// AUTHENTICATION
const controllerAPILogin = require(join(__dirname, 'authentication', 'login.js'))
const controllerAPISession = require(join(__dirname, 'authentication', 'session.js'))
const controllerAPISignin = require(join(__dirname, 'authentication', 'signin.js'))

// QUESTION
const controllerAPIGetQuestion = require(join(__dirname, 'question', 'getQuestion.js'))
const controllerAPIGetQuestions = require(join(__dirname, 'question', 'getQuestions.js'))
const controllerAPIAddQuestion = require(join(__dirname, 'question', 'addQuestion.js'))
const controllerAPIEditQuestion = require(join(__dirname, 'question', 'editQuestion.js'))
const controllerAPIDeleteQuestion = require(join(__dirname, 'question', 'deleteQuestion.js'))
  

module.exports = {
  controllerAPILogin,
  controllerAPISession,
  controllerAPISignin,
  controllerAPIGetQuestion,
  controllerAPIGetQuestions,
  controllerAPIAddQuestion,
  controllerAPIEditQuestion,
  controllerAPIDeleteQuestion
}