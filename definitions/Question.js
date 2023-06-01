const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Question', {
    QuestionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    questionLabel: {
      type: DataTypes.STRING
    },
    goodAnswer: {
      type: DataTypes.STRING
    },
    badAnswer1: {
      type: DataTypes.STRING
    },
    badAnswer2: {
      type: DataTypes.STRING
    },
    badAnswer3: {
      type: DataTypes.STRING
    },
    difficultyID: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: true
  })
}