module.exports = async function controllerAPISession ( app, req, res ) {

  try {

    if (typeof req.params === 'undefined') {

      throw new ReferenceError("no params in req")

    } else if (typeof req.params.token === 'undefined') {

      throw new ReferenceError("token reference error")

    } else if (typeof req.params.token !== 'string') {

      throw new TypeError("token type error")

    }

    const session = await app.Session.findOne({ 

      where: { token: req.params.token }, 
      include: {model: app.User, required: true, right: true,
        include: {model: app.Role, required: true}
      },
      raw: true

    })

    // must be delayed to avoid session crash
    new Promise((resolve) => {

      setTimeout(resolve, 100)

    })
    .then(

      (session) ? res.json({"nickname": session['User.nickname'], "role": session['User.Role.roleLabel'], "isVerified": !!session['User.isVerified']}) : res.status(404).json({code: "NOT_FOUND", message: "Token not available"})

    )

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}