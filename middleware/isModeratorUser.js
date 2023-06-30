module.exports = async function middlewareCheckNotSimpleUser ( app, req, res, next ) {

  try {

    (req.User.role !== 'basic') ? next() : res.status(403).json({code: "FORBIDDEN", message: "access denied"})

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}