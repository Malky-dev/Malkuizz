"use strict"

// deps
  // natives
  const { join } = require('path')

  // externals
  const express = require('express')
  const cors = require('cors')
  const { Sequelize } = require('sequelize')
  const DeviceDetector = require("device-detector-js")
  const cookieParser = require('cookie-parser')
  const bodyParser = require('body-parser')

  // locals
  const { getUser, getSession, getRole } = require(join(__dirname, 'definitions', 'definitions.js'))
  const { encryptSHA256, formatDate } = require(join(__dirname, 'global.js'))

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

// APP API
app.get('/api/session/:token', async function (req, res) {

  try {

    if (typeof req.params === 'undefined') {

      throw new ReferenceError("no params in req")

    } else if (typeof req.params.token === 'undefined') {

      throw new ReferenceError("token reference error")

    } else if (typeof req.params.token !== 'string') {

      throw new TypeError("token type error")

    }

    const session = await Session.findOne({ 

      where: { token: req.params.token }, 
      include: {model: User, required: true, right: true,
        include: {model: Role, required: true}
      },
      raw: true

    })

    (session) ? res.json({"nickname": session['User.nickname'], "role": session['User.Role.roleLabel'], "isVerified": !!session['User.isVerified']}) : res.status(404).json({code: "NOT_FOUND", message: "Token not available"})

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
})
.post('/api/login', async (req, res) => {  

  try {
    console.log(req.body);

    if (typeof req.body === 'undefined') {

      throw new ReferenceError("no params in body")

    } else if (typeof req.body.email === 'undefined') {

      throw new ReferenceError("email reference error")

    } else if (typeof req.body.email !== 'string') {

      throw new TypeError("email type error")

    } else if (typeof req.body.password === 'undefined') {

      throw new ReferenceError("password reference error")

    } else if (typeof req.body.password !== 'string') {

      throw new TypeError("password type error")

    }

    const user = await User.findOne({ where: { email: req.body.email, password: encryptSHA256(req.body.password) }})
    
    if (user) {

     const token = encryptSHA256(req.body.email + formatDate(new Date))
     const deviceDetector = new DeviceDetector()
     const userAgent = req.get('User-Agent')
     const device = deviceDetector.parse(userAgent)

     Session.create({ 
      userID: user.userID,
      token: token,
      expiration: formatDate(new Date(new Date().setDate(new Date().getDate() + 30))),
      device: device.device.type,
      browser: device.client.name })

      res.cookie('Malkuizz', token, { maxAge: 1000*60*60*24*30 })

      res.json(token)

    } else {

      res.status(404).json({code: "NOT_FOUND", message: "User not available"})

    }
  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
})

// Global 404
app.use(function(req, res) {

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