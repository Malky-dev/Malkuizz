module.exports = async function controllerAPIAddQuestion ( app, req, res ) {

  try {

    if (app.Role.roleID === 3) {

      throw new RangeError("role range error")
      
    } else if (typeof req.body === 'undefined') {

      throw new ReferenceError("no params in body")

    } else if (typeof req.body.label === 'undefined') {

      throw new ReferenceError("label reference error")

    } else if (typeof req.body.label !== 'string') {

      throw new TypeError("label type error")

    } else if (typeof req.body.goodAnswer === 'undefined') {

      throw new ReferenceError("goodAnswer reference error")

    } else if (typeof req.body.goodAnswer !== 'string') {

      throw new TypeError("goodAnswer type error")

    } else if (typeof req.body.badAnswer1 === 'undefined') {

      throw new ReferenceError("badAnswer1 reference error")

    } else if (typeof req.body.badAnswer1 !== 'string') {

      throw new TypeError("badAnswer1 type error")

    } else if (typeof req.body.badAnswer2 === 'undefined') {

      throw new ReferenceError("badAnswer2 reference error")

    } else if (typeof req.body.badAnswer2 !== 'string') {

      throw new TypeError("badAnswer2 type error")

    } else if (typeof req.body.badAnswer3 === 'undefined') {

      throw new ReferenceError("badAnswer3 reference error")

    } else if (typeof req.body.badAnswer3 !== 'string') {

      throw new TypeError("badAnswer3 type error")

    } else if (typeof req.body.difficulty === 'undefined') {

      throw new ReferenceError("difficulty reference error")

    } else if (typeof req.body.difficulty !== 'string') {

      throw new TypeError("difficulty type error")

    } else if (typeof req.body.categories === 'undefined') {

      throw new ReferenceError("categories reference error")

    } else if (typeof req.body.categories !== 'string') {

      throw new TypeError("categories type error")

    }

    const question = await app.question.findOne({ where: { questionLabel: req.body.label }})

    if (!question) {
      
      app.Question.create({
        questionLabel: req.body.label,
        goodAnswer: req.body.goodAnswer,
        badAnswer1: req.body.badAnswer1,
        badAnswer2: req.body.badAnswer2,
        badAnswer3: req.body.badAnswer3,
        difficulty: req.body.difficulty
      })

    }

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}