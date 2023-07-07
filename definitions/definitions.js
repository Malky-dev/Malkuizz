const { join } = require('path')

const getUser = require(join(__dirname, 'User'))
const getSession = require(join(__dirname, 'Session'))
const getRole = require(join(__dirname, 'Role'))
const getQuestion = require(join(__dirname, 'Question'))
const getCategory = require(join(__dirname, 'Category'))
const getDifficulty = require(join(__dirname, 'Difficulty'))
const getScore = require(join(__dirname, 'Score'))
const getRel_question_category = require(join(__dirname, 'Rel_question_category'))

module.exports = {
  getUser,
  getSession,
  getRole,
  getQuestion,
  getCategory,
  getDifficulty,
  getScore,
  getRel_question_category
}