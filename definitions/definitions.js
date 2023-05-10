const { join } = require('path')

const getUser = require(join(__dirname, 'User'))
const getSession = require(join(__dirname, 'Session'))

module.exports = {
  getUser, getSession
}