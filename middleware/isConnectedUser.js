module.exports = async function middlewareCheckUser ( app, req, res, next ) {

  try {

    if (typeof req.headers === 'undefined') {

      throw new ReferenceError("no headers in req")

    } else if (typeof req.headers.token === 'undefined') {

      throw new ReferenceError("token reference error")

    } else if (typeof req.headers.token !== 'string') {

      throw new TypeError("token type error")

    }


    const session = await app.Session.findOne({ 

      where: { token: req.headers.token }, 
      include: {model: app.User, required: true, right: true,
        include: {model: app.Role, required: true}
      },
      raw: true

    })

    // must be delayed to avoid session crash
    new Promise((resolve) => {

      setTimeout(resolve, 100)

    })
    .then( () => {

      if (session) {

        req.User = {"nickname": session['User.nickname'], "role": session['User.Role.roleLabel'], "isVerified": !!session['User.isVerified']}  
        next()

      } else {

        res.status(404).json({code: "NOT_FOUND", message: "Token not available"})

      }
    })

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}