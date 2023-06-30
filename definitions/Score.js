const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('Question', {
    scoreID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    scoreValue: {
      type: DataTypes.INTEGER
    },
    userID: {
      type: DataTypes.INTEGER
    },
    difficultyID: {
      type: DataTypes.INTEGER
    },
    categoryID: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    updatedAt: false
  })
}