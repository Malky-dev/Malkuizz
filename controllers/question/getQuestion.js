module.exports = function controllerAPIGetQuestion ( app, req, res ) {

  Promise.resolve().then(() => {

    if (typeof req.params === 'undefined') {

      throw new ReferenceError("no params in req")

    } else if (typeof req.params.id === 'undefined') {

      throw new ReferenceError("id reference error")

    } else if (typeof req.params.id !== 'string') {

      throw new TypeError("id type error")

    }

  }).then(() => {

    return app.Question.findOne({ where: { questionID: req.params.id }})

  }).then((question) => {

    return app.Rel_question_category.findAll({ where: { questionID: req.params.id }, raw: true}).then( (categories) => {
      
      (question && categories) ? 
      
      res.json({
        "label": question['questionLabel'],
        "goodAnswer": question['goodAnswer'],
        "badAnswer1": question['badAnswer1'],
        "badAnswer2": question['badAnswer2'],
        "badAnswer3": question['badAnswer3'],
        "difficulty": question['difficultyID'],
        "categories": categories.map(category => { return category['categoryID']}),
        "id": req.params.id
      })
    
      : res.status(404).json({code: "NOT_FOUND", message: "question not found"})

    })

  }).catch((error) => {

    console.error(error)
    res.status(500).json({code: "ERROR", message: error.message})

  })
}