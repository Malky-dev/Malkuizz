// natives
const { join } = require('path')

// locals
const { encryptSHA256 } = require(join(__dirname, '..' , '..' , 'global.js'))

module.exports = async function controllerAPISignin ( app, req, res ) {

  try {

    if (typeof req.body === 'undefined') {

      throw new ReferenceError("no params in body")

    } else if (typeof req.body.nickname === 'undefined') {

      throw new ReferenceError("nickname reference error")

    } else if (typeof req.body.nickname !== 'string') {

      throw new TypeError("nickname type error")

    } else if (typeof req.body.email === 'undefined') {

      throw new ReferenceError("email reference error")

    } else if (typeof req.body.email !== 'string') {

      throw new TypeError("email type error")

    } else if (typeof req.body.password === 'undefined') {

      throw new ReferenceError("password reference error")

    } else if (typeof req.body.password !== 'string') {

      throw new TypeError("password type error")

    }

    const user = await app.User.findOne({ where: { nickname: req.body.nickname, email: req.body.email }})

    if (!user) {

      app.User.create({
        nickname: req.body.nickname,
        email: req.body.email,
        password: encryptSHA256(req.body.password),
        roleID: 3
      })

      res.status(201).json("User successfully inserted")

    } else {

      res.status(500).json({code: "DUPLICATE", message: "User already exists"})

    }

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}