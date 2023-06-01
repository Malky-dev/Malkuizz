const { join } = require('path')

const getUser = require(join(__dirname, 'User'))
const getSession = require(join(__dirname, 'Session'))
const getRole = require(join(__dirname, 'Role'))
const getQuestion = require(join(__dirname, 'Question'))
const getCategory = require(join(__dirname, 'Category'))
const getDifficulty = require(join(__dirname, 'Difficulty'))
const getScore = require(join(__dirname, 'Score'))

module.exports = {
  getUser, getSession, getRole, getQuestion, getCategory, getDifficulty, getScore
}