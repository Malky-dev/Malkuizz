const { join } = require('path')

const getUser = require(join(__dirname, 'User'))
const getSession = require(join(__dirname, 'Session'))
const getRole = require(join(__dirname, 'Role'))

module.exports = {
  getUser, getSession, getRole
}