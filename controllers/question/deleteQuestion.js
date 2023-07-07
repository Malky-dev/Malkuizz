module.exports = async function controllerAPIDeleteQuestion ( app, req, res ) {

  try {

    if (typeof req.params === 'undefined') {

      throw new ReferenceError("no params in req")

    } else if (typeof req.params.id === 'undefined') {

      throw new ReferenceError("id reference error")

    } else if (typeof req.params.id !== 'string') {

      throw new TypeError("id type error")

    }
      
    await app.Question.destroy({
      where: {
          questionID: req.params.id
      }
    })

    res.status(204).json("Question successfully deleted")

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}