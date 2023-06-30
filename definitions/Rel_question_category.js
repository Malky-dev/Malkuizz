const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const table =  sequelize.define('rel_question_category', {
    questionID: {
      type: DataTypes.INTEGER
    },
    categoryID: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })
  table.removeAttribute('id')

  return table
}