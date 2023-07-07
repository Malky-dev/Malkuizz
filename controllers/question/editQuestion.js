module.exports = async function controllerAPIEditQuestion ( app, req, res ) {

  try {

    if (typeof req.body === 'undefined') {

      throw new ReferenceError("no params in body")

    } else if (typeof req.body.id === 'undefined') {

      throw new ReferenceError("id reference error")

    } else if (typeof req.body.id !== 'string') {

      throw new TypeError("id type error")

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

    } else if (typeof req.body.difficulty !== 'number') {

      throw new TypeError("difficulty type error")

    } else if (typeof req.body.categories === 'undefined') {

      throw new ReferenceError("categories reference error")

    } else if (typeof req.body.categories !== 'object' && req.body.categories instanceof Array) {

      throw new TypeError("categories type error")

    }

    req.body.categories.forEach((category, key) => {
      if (typeof category === 'number') {

        throw new TypeError("category " + key + " type error")
  
      }
    });
      
    await app.Question.update(
      {
        questionLabel: req.body.label,
        goodAnswer: req.body.goodAnswer,
        badAnswer1: req.body.badAnswer1,
        badAnswer2: req.body.badAnswer2,
        badAnswer3: req.body.badAnswer3,
        difficultyID: req.body.difficultyID
      },
      { where: { questionID: req.params.id } }
    )
      
    await app.Rel_question_category.destroy({
      where: {
          questionID: req.params.id
      }
    })

    await app.Rel_question_category.bulkCreate(req.body.categories.map((category) => {
      return { questionID: req.params.id, categoryID: category}
    }))

    res.status(200).json("Question successfully updated")

  } catch (error) {

    res.status(500).json({code: "ERROR", message: error.message})
    console.log(error);

  }
}