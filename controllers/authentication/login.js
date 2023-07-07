// natives
const { join } = require('path')

// externals
const DeviceDetector = require("device-detector-js")

// locals
const { encryptSHA256, formatDate } = require(join(__dirname, '..' , '..' , 'global.js'))

module.exports = async function controllerAPILogin ( app, req, res ) {

  try {

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

    const user = await app.User.findOne({ where: { email: req.body.email, password: encryptSHA256(req.body.password) }})
    
    if (user) {

     const token = encryptSHA256(req.body.email + formatDate(new Date))
     const deviceDetector = new DeviceDetector()
     const userAgent = req.get('User-Agent')
     const device = deviceDetector.parse(userAgent)

     await app.Session.create({ 
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
}