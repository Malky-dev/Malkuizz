module.exports = async function controllerAPIGetQuestions ( app, req, res ) {

  Promise.resolve().then(() => {

    return app.Question.findAll()

  }).then((questions) => {

    return app.Rel_question_category.findAll().then( (categories) => {

      const result = questions.map((question) => {
        return {...question.dataValues, categories: categories
          .filter((category) => {
            return category.dataValues.questionID === question.dataValues.questionID 
          }).map((category) => {
            return category.dataValues.categoryID
          })
        }
      })

      (questions && categories) ? 
      
      res.json({result})
    
      : res.status(404).json({code: "NOT_FOUND", message: "questions not found"})

    })

  }).catch((error) => {

    console.error(error)
    res.status(500).json({code: "ERROR", message: error.message})

  })
}