const { join } = require('path')

const middlewareCheckUser = require(join(__dirname, 'isConnectedUser'))
const middlewareCheckNotSimpleUser = require(join(__dirname, 'isModeratorUser'))
const middlewareCheckAdminUser = require(join(__dirname, 'isAdminUser'))

module.exports = {
  middlewareCheckUser,
  middlewareCheckNotSimpleUser,
  middlewareCheckAdminUser
}