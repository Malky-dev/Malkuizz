module.exports = async function controllerAPIDeleteQuestion ( app, req, res ) {

  try {

    console.log(app, req, res);

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}